// src/pages/dashboard/page.tsx

import { useEffect, useState } from "react";

import { Home, Moon, QrCode, Settings, Sun } from "lucide-react";

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
      className={`min-h-screen pb-32 transition ${
        darkMode ? "bg-[#111111]" : "bg-[#F5F5F5]"
      }`}
    >
      <div className="mx-auto max-w-md px-5 pt-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1
              className={`text-[34px] font-semibold tracking-tight ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Dashboard
            </h1>

            <p
              className={`mt-1 text-sm ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Manage your hostel key activity
            </p>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`flex h-12 w-12 items-center justify-center rounded-full transition ${
              darkMode ? "bg-[#1C1C1E]" : "bg-white"
            }`}
          >
            {darkMode ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-gray-700" />
            )}
          </button>
        </div>

        <div className="mb-5 flex items-center gap-3 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab("overview")}
            className={`whitespace-nowrap rounded-full px-5 py-3 text-sm font-medium transition ${
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
            className={`whitespace-nowrap rounded-full px-5 py-3 text-sm font-medium transition ${
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
            className={`whitespace-nowrap rounded-full px-5 py-3 text-sm font-medium transition ${
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

        <div className="space-y-5">
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

      <div className="fixed bottom-6 left-1/2 z-50 w-[90%] max-w-sm -translate-x-1/2">
        <div className="flex items-center justify-between rounded-full bg-[#111111] px-6 py-4">
          <button
            onClick={() => navigate("/dashboard")}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black"
          >
            <Home size={22} />
          </button>

          <button
            onClick={() => navigate("/scan")}
            className="flex h-11 w-11 items-center justify-center rounded-full text-[#8E8E93]"
          >
            <QrCode size={22} />
          </button>

          <button
            onClick={() => navigate("/settings")}
            className="flex h-11 w-11 items-center justify-center rounded-full text-[#8E8E93]"
          >
            <Settings size={22} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
