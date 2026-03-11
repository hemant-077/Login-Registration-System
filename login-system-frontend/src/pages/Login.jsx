import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform
} from "framer-motion";
import { loginUser } from "../services/authService";

const Login = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /* 🖱 Mouse → water inertia */
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const smoothX = useSpring(rawX, { stiffness: 30, damping: 25 });
  const smoothY = useSpring(rawY, { stiffness: 30, damping: 25 });

  const rotateX = useTransform(smoothY, [-300, 300], [4, -4]);
  const rotateY = useTransform(smoothX, [-300, 300], [-4, 4]);

  const handleMouseMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();

    rawX.set(e.clientX - r.left - r.width / 2);
    rawY.set(e.clientY - r.top - r.height / 2);

    /* water light position */
    e.currentTarget.style.setProperty(
      "--x",
      `${(e.clientX / window.innerWidth) * 100}%`
    );
    e.currentTarget.style.setProperty(
      "--y",
      `${(e.clientY / window.innerHeight) * 100}%`
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.email || !data.password) {
      setError("Email and password are required");
      return;
    }

    try {
      setLoading(true);
      const res = await loginUser(data);
      localStorage.setItem("token", res.token);
      setTimeout(() => navigate("/dashboard"), 900);
    } catch {
      setError("Invalid credentials");
    } finally {
      setTimeout(() => setLoading(false), 900);
    }
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden px-4"
    >
      {/* 🌊 WATER BACKGROUND */}
      <div className="water-bg" />

      {/* 🧊 LOGIN CARD */}
      <motion.form
        onSubmit={handleSubmit}
        style={{ rotateX, rotateY }}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.015 }}
        className="relative z-10 w-full max-w-md bg-black/70 backdrop-blur-2xl border border-white/15 p-8 rounded-2xl"
      >
        <h2 className="text-3xl font-semibold text-center text-white mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-gray-400 mb-6">
          Secure access
        </p>

        {error && (
          <div className="mb-4 text-sm text-white bg-white/10 px-4 py-2 rounded-lg border border-white/20">
            {error}
          </div>
        )}

        {/* Email */}
        <div className="mb-4">
          <label className="text-sm text-gray-300 mb-1 block">Email</label>
          <div className="relative">
            <Mail
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              size={18}
            />
            <input
              type="email"
              value={data.email}
              onChange={(e) =>
                setData({ ...data, email: e.target.value })
              }
              className="w-full pl-10 pr-4 py-2.5 bg-black text-white border border-white/20 rounded-lg focus:ring-2 focus:ring-white outline-none"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="text-sm text-gray-300 mb-1 block">Password</label>
          <div className="relative">
            <Lock
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              size={18}
            />
            <input
              type="password"
              value={data.password}
              onChange={(e) =>
                setData({ ...data, password: e.target.value })
              }
              className="w-full pl-10 pr-4 py-2.5 bg-black text-white border border-white/20 rounded-lg focus:ring-2 focus:ring-white outline-none"
            />
          </div>
        </div>

        {/* Button */}
        <motion.button
          type="submit"
          whileTap={{ scale: 0.96 }}
          disabled={loading}
          className="w-full h-11 rounded-lg bg-white text-black font-medium"
        >
          {loading ? "Signing in..." : "Sign In"}
        </motion.button>

        <p className="text-center text-sm text-gray-400 mt-5">
          Don’t have an account?{" "}
          <Link to="/register" className="text-white underline">
            Create one
          </Link>
        </p>
      </motion.form>
    </div>
  );
};

export default Login;
