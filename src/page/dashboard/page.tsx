// src/pages/dashboard/page.tsx

import { useEffect, useState } from "react";

import { Home, LogOut, Moon, QrCode, Settings, Sun, X } from "lucide-react";

import { useLocation, useNavigate } from "react-router-dom";

import ProfileCard from "../../components/dashboard/ProfileCard";
import KeyStatusCard from "../../components/dashboard/KeyCardStatus";
import RecentActivity from "../../components/dashboard/RecentActivity";

const DashboardPage = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const [activeTab, setActiveTab] = useState("overview");

  const [darkMode, setDarkMode] = useState(false);

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname, activeTab]);

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <>
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

            {activeTab === "key-status" && (
              <KeyStatusCard darkMode={darkMode} />
            )}

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
              onClick={() => setShowLogoutModal(true)}
              className="flex h-11 w-11 items-center justify-center rounded-full text-[#8E8E93]"
            >
              <Settings size={22} />
            </button>
          </div>
        </div>
      </div>

      {showLogoutModal && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/40 px-5 pb-6 md:items-center">
          <div
            className={`w-full max-w-sm rounded-[32px] p-5 ${
              darkMode ? "bg-[#1C1C1E]" : "bg-white"
            }`}
          >
            <div className="mb-5 flex items-center justify-between">
              <h2
                className={`text-[22px] font-semibold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Logout
              </h2>

              <button
                onClick={() => setShowLogoutModal(false)}
                className={`flex h-10 w-10 items-center justify-center rounded-full ${
                  darkMode ? "bg-[#2C2C2E]" : "bg-[#F5F5F5]"
                }`}
              >
                <X
                  size={18}
                  className={darkMode ? "text-gray-300" : "text-gray-600"}
                />
              </button>
            </div>

            <div
              className={`rounded-[24px] p-4 ${
                darkMode ? "bg-[#2C2C2E]" : "bg-[#F8F8F8]"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100">
                  <LogOut size={22} className="text-red-500" />
                </div>

                <div>
                  <p
                    className={`text-[15px] font-semibold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Are you sure?
                  </p>

                  <p
                    className={`mt-1 text-xs ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    You will be returned to the login screen.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 flex gap-3">
              <button
                onClick={() => setShowLogoutModal(false)}
                className={`flex-1 rounded-full py-4 text-sm font-semibold ${
                  darkMode
                    ? "bg-[#2C2C2E] text-white"
                    : "bg-[#F5F5F5] text-gray-700"
                }`}
              >
                Cancel
              </button>

              <button
                onClick={handleLogout}
                className="flex-1 rounded-full bg-[#111111] py-4 text-sm font-semibold text-white"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardPage;
