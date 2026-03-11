import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock, User } from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform
} from "framer-motion";
import { registerUser } from "../services/authService";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /* 🖱 Mouse → same 3D effect as Login */
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

    e.currentTarget.style.setProperty(
      "--x",
      `${(e.clientX / window.innerWidth) * 100}%`
    );
    e.currentTarget.style.setProperty(
      "--y",
      `${(e.clientY / window.innerHeight) * 100}%`
    );
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);
      await registerUser(form);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden px-4"
    >
      {/* 🌊 SAME WATER BACKGROUND */}
      <div className="water-bg" />

      {/* 🧊 REGISTER CARD */}
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
          Create Account
        </h2>
        <p className="text-center text-gray-400 mb-6">
          Join us to get started
        </p>

        {error && (
          <div className="mb-4 text-sm text-white bg-white/10 px-4 py-2 rounded-lg border border-white/20">
            {error}
          </div>
        )}

        {/* Name */}
        <div className="mb-4">
          <label className="text-sm text-gray-300 mb-1 block">Name</label>
          <div className="relative">
            <User
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              size={18}
            />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2.5 bg-black text-white border border-white/20 rounded-lg focus:ring-2 focus:ring-white outline-none"
            />
          </div>
        </div>

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
              name="email"
              value={form.email}
              onChange={handleChange}
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
              name="password"
              value={form.password}
              onChange={handleChange}
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
          {loading ? "Creating account..." : "Register"}
        </motion.button>

        <p className="text-center text-sm text-gray-400 mt-5">
          Already have an account?{" "}
          <Link to="/" className="text-white underline">
            Login
          </Link>
        </p>
      </motion.form>
    </div>
  );
};

export default Register;
