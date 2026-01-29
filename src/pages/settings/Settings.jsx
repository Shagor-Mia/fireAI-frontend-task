import { useState } from "react";
import avtar from "../../assets/avtar.png";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [forgotEmail, setForgotEmail] = useState("");

  const profileData = {
    fullName: "Jane D.",
    email: "jane@gmail.com",
    storeName: "Ubreakfix Store",
    storeAddress: "123 Main Street, New York, NY 10001",
    avtar,
  };

  return (
    <div className="">
      <div className="max-w-2xl mx-auto px-4 sm:px-0">
        {/* Navigation Tabs */}
        <div className="flex gap-12 mb-10 mt-3">
          <button
            className={`pb-4 md:text-2xl font-medium border-b-2 transition-colors ${
              activeTab === "profile"
                ? "border-blue-500 text-white"
                : "border-transparent text-slate-400 hover:text-white"
            }`}
            onClick={() => setActiveTab("profile")}
          >
            Profile
          </button>
          <button
            className={`pb-4 md:text-2xl font-medium border-b-2 transition-colors ${
              activeTab === "password"
                ? "border-blue-500 text-white"
                : "border-transparent text-slate-400 hover:text-white"
            }`}
            onClick={() => setActiveTab("password")}
          >
            Password Settings
          </button>
        </div>

        {/* Profile Tab */}
        {activeTab === "profile" && (
          <>
            {/* Profile Image Section */}
            <div className="mb-12">
              <h3 className="md:text-xl text-slate-200 mb-4">Profile Image</h3>
              <div className="flex items-center gap-6">
                <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-blue-500/30 shadow-2xl shadow-blue-500/20">
                  <img
                    src={profileData.avtar}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                <button
                  className="
                    px-4 py-1.5 rounded-full text-sm mt-16 -ml-5 text-slate-200
                    bg-slate-800/40 border border-white/10
                    shadow-[inset_0_0_12px_rgba(255,255,255,0.5)]
                    hover:shadow-[inset_0_0_18px_rgba(255,255,255,0.3)]
                    hover:scale-105 transition-all duration-300
                  "
                >
                  Edit Profile
                </button>
              </div>
            </div>

            {/* Profile Details List */}
            <div className="space-y-0">
              {[
                { label: "Full Name:", value: profileData.fullName },
                { label: "Email:", value: profileData.email },
                { label: "Store Name:", value: profileData.storeName },
                { label: "Store Address:", value: profileData.storeAddress },
              ].map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[1fr_2fr] py-6 border-b border-slate-500/50 items-center"
                >
                  <span className="md:text-xl text-slate-100 ">
                    {item.label}
                  </span>
                  <span className="md:text-xl text-slate-300">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Password Settings Tab */}
        {activeTab === "password" && (
          <div className="space-y-8">
            {/* Change Password */}
            <div>
              <h3 className="md:text-xl text-slate-200 mb-4">
                Change Password
              </h3>
              <div className="space-y-4">
                <input
                  type="password"
                  placeholder="Old Password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
                />
                <input
                  type="password"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
                />
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
                />
                <button className="px-6 py-3 bg-blue-600 text-white rounded-xl  shadow-lg hover:bg-blue-500 transition-all w-full sm:w-auto">
                  Update Password
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div>
              <h3 className="md:text-xl text-slate-200 mb-4">
                Forgot Password
              </h3>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
                />
                <button className="px-6 py-3 bg-emerald-600 text-white rounded-xl font-medium shadow-lg hover:bg-emerald-500 transition-all w-full sm:w-auto">
                  Send Reset Link
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
