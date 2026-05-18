// src/pages/dashboard/page.tsx

import { useEffect, useState } from "react";

import { ArrowUpRight, Home, Moon, QrCode, Settings, Sun } from "lucide-react";

import { useLocation, useNavigate } from "react-router-dom";

import RecentActivity from "../../components/dashboard/RecentActivity";

const DashboardPage = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const [darkMode, setDarkMode] = useState(false);

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
    <div
      className={`min-h-screen pb-36 transition-all duration-300 ${
        darkMode ? "bg-[#111111]" : "bg-[#F3F3F3]"
      }`}
    >
      <div className="mx-auto max-w-md px-5 pt-6">
        {/* HEADER */}
        <div className="mb-7 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* AVATAR */}
            <div className="relative">
              <div className="h-16 w-16 overflow-hidden rounded-[22px]">
                <img
                  src="https://i.pravatar.cc/300"
                  alt="profile"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-white bg-green-500" />
            </div>

            {/* USER INFO */}
            <div>
              <p
                className={`text-sm font-medium ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {greeting} 👋
              </p>

              <h1
                className={`mt-1 text-[22px] font-bold tracking-[-0.5px] ${
                  darkMode ? "text-white" : "text-[#111111]"
                }`}
              >
                Samuel Asije
              </h1>

              <p
                className={`mt-1 text-xs font-medium tracking-wide ${
                  darkMode ? "text-gray-500" : "text-gray-400"
                }`}
              >
                BIU/23/CSC/001
              </p>
            </div>
          </div>

          {/* DARK MODE */}
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

        {/* SMART ACCESS CARD */}
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
                  Smart Access
                </div>

                <h2 className="max-w-[220px] text-[28px] font-bold leading-tight tracking-[-1px] text-white">
                  Hostel QR Key System
                </h2>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-black">
                <QrCode size={28} />
              </div>
            </div>

            <div className="rounded-[28px] bg-white/10 p-5 backdrop-blur-xl">
              <p className="text-xs text-gray-300">Last key activity</p>

              <div className="mt-3 flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold text-white">
                    Room A-204 Collected
                  </p>

                  <p className="mt-1 text-sm text-gray-300">2 mins ago</p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ACTIVITY HEADER */}
        <div className="mb-4 mt-7 flex items-center justify-between">
          <div>
            <h2
              className={`text-[22px] font-bold tracking-[-0.5px] ${
                darkMode ? "text-white" : "text-[#111111]"
              }`}
            >
              Activity
            </h2>

            <p
              className={`mt-1 text-sm ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Recent hostel key activities
            </p>
          </div>
        </div>

        {/* ACTIVITY */}
        <RecentActivity darkMode={darkMode} />
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
