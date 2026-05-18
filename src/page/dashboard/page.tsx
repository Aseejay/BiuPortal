// src/pages/dashboard/page.tsx

import { useEffect, useState } from "react";

import {
  ArrowUpRight,
  Home,
  LogOut,
  Moon,
  QrCode,
  Settings,
  Sun,
  X,
} from "lucide-react";

import { useLocation, useNavigate } from "react-router-dom";

import RecentActivity from "../../components/dashboard/RecentActivity";

const DashboardPage = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const [darkMode, setDarkMode] = useState(false);

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const hour = new Date().getHours();

  const greeting =
    hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return (
    <>
      <div
        className={`min-h-screen pb-36 ${
          darkMode ? "bg-[#111111]" : "bg-[#F3F3F3]"
        }`}
      >
        <div className="mx-auto max-w-md">
          {/* BLACK SECTION */}
          <div className="overflow-hidden bg-[#111111] px-5 pb-8 pt-6">
            {/* PROFILE */}
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* AVATAR */}
                <div className="relative">
                  <div className="h-14 w-14 overflow-hidden rounded-full border-2 border-white/10">
                    <img
                      src="https://i.pravatar.cc/300"
                      alt="profile"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-[#111111] bg-green-500" />
                </div>

                {/* INFO */}
                <div>
                  <p className="text-[11px] font-medium text-gray-300">
                    {greeting} 👋
                  </p>

                  <h1 className="mt-1 text-[17px] font-bold tracking-[-0.3px] text-white">
                    Samuel Asije
                  </h1>

                  <p className="mt-1 text-[10px] font-medium text-gray-400">
                    BIU/23/CSC/001
                  </p>
                </div>
              </div>

              {/* ACTIONS */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white"
                >
                  {darkMode ? (
                    <Sun size={16} className="text-yellow-400" />
                  ) : (
                    <Moon size={16} />
                  )}
                </button>

                <button
                  onClick={() => setShowLogoutModal(true)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white"
                >
                  <Settings size={16} />
                </button>
              </div>
            </div>

            {/* SMART ACCESS */}
            <div>
              <div className="mb-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white">
                Smart Access
              </div>

              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <h2 className="max-w-[200px] text-[24px] font-bold leading-tight tracking-[-0.8px] text-white">
                    Hostel QR Key System
                  </h2>

                  <p className="mt-3 text-[13px] leading-6 text-gray-300">
                    Secure hostel key collection and drop verification.
                  </p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black">
                  <QrCode size={24} />
                </div>
              </div>

              {/* LAST ACTIVITY */}
              <div className="rounded-[24px] bg-white/10 p-4 backdrop-blur-xl">
                <p className="text-[11px] text-gray-300">Last key activity</p>

                <div className="mt-3 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[15px] font-semibold text-white">
                      Room A-204 Collected
                    </p>

                    <p className="mt-1 text-xs text-gray-300">2 mins ago</p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* WHITE SECTION */}
          <div className="px-5 pt-6">
            <RecentActivity darkMode={darkMode} />
          </div>
        </div>

        {/* BOTTOM NAV */}
        <div className="fixed bottom-6 left-1/2 z-50 w-[90%] max-w-sm -translate-x-1/2">
          <div
            className={`flex items-center justify-between rounded-full px-7 py-4 ${
              darkMode ? "bg-[#1A1A1A]" : "bg-[#111111]"
            } shadow-[0_10px_40px_rgba(0,0,0,0.18)]`}
          >
            <button className="text-white">
              <Home size={21} />
            </button>

            <button
              onClick={() => navigate("/scan")}
              className="flex h-15 w-15 items-center justify-center rounded-full bg-white p-4 text-black shadow-xl"
            >
              <QrCode size={24} />
            </button>

            <button
              onClick={() => setShowLogoutModal(true)}
              className="text-[#8E8E93]"
            >
              <Settings size={21} />
            </button>
          </div>
        </div>
      </div>

      {/* LOGOUT MODAL */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/40 p-5 backdrop-blur-sm md:items-center">
          <div
            className={`w-full max-w-sm overflow-hidden rounded-[32px] ${
              darkMode ? "bg-[#1A1A1A]" : "bg-white"
            }`}
          >
            {/* TOP */}
            <div
              className={`relative p-5 ${
                darkMode ? "bg-[#202020]" : "bg-[#111111]"
              }`}
            >
              <div className="relative z-10">
                <div className="mb-5 flex justify-end">
                  <button
                    onClick={() => setShowLogoutModal(false)}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white"
                  >
                    <X size={17} />
                  </button>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="h-20 w-20 overflow-hidden rounded-full border-2 border-white/10">
                    <img
                      src="https://i.pravatar.cc/300"
                      alt="profile"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <h2 className="mt-4 text-[20px] font-bold text-white">
                    Samuel Asije
                  </h2>

                  <p className="mt-1 text-[11px] text-gray-400">
                    BIU/23/CSC/001
                  </p>

                  <div className="mt-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white">
                    Verified Resident
                  </div>
                </div>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <div
                className={`rounded-[24px] p-4 ${
                  darkMode ? "bg-[#232323]" : "bg-[#F7F7F7]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100">
                    <LogOut size={20} className="text-red-500" />
                  </div>

                  <div>
                    <p
                      className={`text-sm font-semibold ${
                        darkMode ? "text-white" : "text-[#111111]"
                      }`}
                    >
                      Logout Session
                    </p>

                    <p
                      className={`mt-1 text-xs ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      You will be redirected to homepage
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex gap-3">
                <button
                  onClick={() => setShowLogoutModal(false)}
                  className={`flex-1 rounded-full py-3 text-sm font-medium ${
                    darkMode
                      ? "bg-[#2A2A2A] text-white"
                      : "bg-[#F5F5F5] text-[#111111]"
                  }`}
                >
                  Cancel
                </button>

                <button
                  onClick={() => navigate("/")}
                  className="flex-1 rounded-full bg-[#111111] py-3 text-sm font-medium text-white"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardPage;
