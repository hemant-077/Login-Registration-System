import { LogOut, User, Activity, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-semibold">Dashboard</h1>
          <p className="text-gray-400 text-sm">
            Welcome back, you are logged in 🎉
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-medium"
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <User className="text-gray-400 mb-3" />
          <h3 className="text-lg font-medium">Profile</h3>
          <p className="text-gray-400 text-sm">
            Manage your account details
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <Activity className="text-gray-400 mb-3" />
          <h3 className="text-lg font-medium">Activity</h3>
          <p className="text-gray-400 text-sm">
            Track recent actions & usage
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <Shield className="text-gray-400 mb-3" />
          <h3 className="text-lg font-medium">Security</h3>
          <p className="text-gray-400 text-sm">
            Password & authentication settings
          </p>
        </div>
      </div>

      {/* Main Section */}
      <div className="bg-white/5 border border-white/10 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-3">
          Getting Started
        </h2>
        <p className="text-gray-400 text-sm mb-4">
          This is your dashboard. From here you can manage your account,
          view activity, and explore features.
        </p>

        <ul className="text-gray-300 text-sm space-y-2">
          <li>✔ Account successfully created</li>
          <li>✔ Authentication working</li>
          <li>✔ Dashboard access enabled</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
