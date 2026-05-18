// src/pages/dashboard/page.tsx

import { useEffect, useState } from "react";

import { ArrowUpRight, Home, Moon, QrCode, Settings, Sun } from "lucide-react";

import { useLocation, useNavigate } from "react-router-dom";

import ProfileCard from "../../components/dashboard/ProfileCard";
import KeyStatusCard from "../../components/dashboard/KeyCardStatus";
import RecentActivity from "../../components/dashboard/RecentActivity";

const DashboardPage = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const [activeTab, setActiveTab] = useState("overview");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname, activeTab]);

  return (
    <div
      className={`min-h-screen pb-36 transition-all duration-300 ${
        darkMode ? "bg-[#111111]" : "bg-[#F3F3F3]"
      }`}
    >
      <div className="mx-auto max-w-md px-5 pt-6">
        {/* HEADER */}
        <div className="mb-7 flex items-center justify-between">
          <div>
            <p
              className={`text-sm font-medium ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Welcome back 👋
            </p>

            <h1
              className={`mt-1 text-[34px] font-bold tracking-[-1px] ${
                darkMode ? "text-white" : "text-[#111111]"
              }`}
            >
              Dashboard
            </h1>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`flex h-12 w-12 items-center justify-center rounded-full transition-all ${
              darkMode ? "bg-[#1C1C1E] text-white" : "bg-white text-[#111111]"
            } shadow-sm`}
          >
            {darkMode ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} />
            )}
          </button>
        </div>

        {/* MAIN QR CARD */}
        <div
          className={`relative overflow-hidden rounded-[36px] p-6 ${
            darkMode ? "bg-[#1A1A1A]" : "bg-[#111111]"
          }`}
        >
          <div className="absolute right-[-20px] top-[-20px] h-40 w-40 rounded-full bg-white/5" />

          <div className="relative z-10">
            <div className="mb-10 flex items-start justify-between">
              <div>
                <div className="mb-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white">
                  Active Session
                </div>

                <h2 className="max-w-[220px] text-[28px] font-bold leading-tight tracking-[-1px] text-white">
                  Smart Hostel Key Access
                </h2>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-black">
                <QrCode size={28} />
              </div>
            </div>

            <div className="flex items-center justify-between rounded-[28px] bg-white/10 p-4 backdrop-blur-xl">
              <div>
                <p className="text-xs text-gray-300">Last key activity</p>

                <p className="mt-1 text-sm font-semibold text-white">
                  Room A-204 Collected
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="mt-5 grid grid-cols-2 gap-4">
          <div
            className={`rounded-[28px] p-5 ${
              darkMode ? "bg-[#1A1A1A]" : "bg-white"
            }`}
          >
            <p
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Keys In Use
            </p>

            <h3
              className={`mt-3 text-[30px] font-bold tracking-[-1px] ${
                darkMode ? "text-white" : "text-[#111111]"
              }`}
            >
              04
            </h3>
          </div>

          <div
            className={`rounded-[28px] p-5 ${
              darkMode ? "bg-[#1A1A1A]" : "bg-white"
            }`}
          >
            <p
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Scans Today
            </p>

            <h3
              className={`mt-3 text-[30px] font-bold tracking-[-1px] ${
                darkMode ? "text-white" : "text-[#111111]"
              }`}
            >
              18
            </h3>
          </div>
        </div>

        {/* TABS */}
        <div className="mt-7 flex items-center gap-3 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab("overview")}
            className={`whitespace-nowrap rounded-full px-5 py-3 text-sm font-medium transition-all ${
              activeTab === "overview"
                ? "bg-[#111111] text-white"
                : darkMode
                  ? "bg-[#1C1C1E] text-gray-300"
                  : "bg-white text-gray-600"
            }`}
          >
            Overview
          </button>

          <button
            onClick={() => setActiveTab("key-status")}
            className={`whitespace-nowrap rounded-full px-5 py-3 text-sm font-medium transition-all ${
              activeTab === "key-status"
                ? "bg-[#111111] text-white"
                : darkMode
                  ? "bg-[#1C1C1E] text-gray-300"
                  : "bg-white text-gray-600"
            }`}
          >
            Key Status
          </button>

          <button
            onClick={() => setActiveTab("activity")}
            className={`whitespace-nowrap rounded-full px-5 py-3 text-sm font-medium transition-all ${
              activeTab === "activity"
                ? "bg-[#111111] text-white"
                : darkMode
                  ? "bg-[#1C1C1E] text-gray-300"
                  : "bg-white text-gray-600"
            }`}
          >
            Activity
          </button>
        </div>

        {/* CONTENT */}
        <div className="mt-5 space-y-5">
          {activeTab === "overview" && (
            <>
              <ProfileCard darkMode={darkMode} />

              <KeyStatusCard darkMode={darkMode} />

              <RecentActivity darkMode={darkMode} />
            </>
          )}

          {activeTab === "key-status" && <KeyStatusCard darkMode={darkMode} />}

          {activeTab === "activity" && <RecentActivity darkMode={darkMode} />}
        </div>
      </div>

      {/* BOTTOM NAV */}
      <div className="fixed bottom-6 left-1/2 z-50 w-[90%] max-w-sm -translate-x-1/2">
        <div
          className={`flex items-center justify-between rounded-full px-7 py-4 ${
            darkMode ? "bg-[#1A1A1A]" : "bg-[#111111]"
          } shadow-[0_10px_40px_rgba(0,0,0,0.18)]`}
        >
          <button onClick={() => navigate("/dashboard")} className="text-white">
            <Home size={22} />
          </button>

          <button
            onClick={() => navigate("/scan")}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-black shadow-xl"
          >
            <QrCode size={25} />
          </button>

          <button
            onClick={() => navigate("/settings")}
            className="text-[#8E8E93]"
          >
            <Settings size={22} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
