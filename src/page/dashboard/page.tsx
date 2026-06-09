// src/pages/dashboard/page.tsx

import { useEffect, useState } from "react";

import {
  ArrowDownLeft,
  ArrowUpRight,
  Home,
  LogOut,
  Moon,
  QrCode,
  Settings,
  Sun,
  User,
  X,
} from "lucide-react";

import { useLocation, useNavigate } from "react-router-dom";

import RecentActivity from "../../components/dashboard/RecentActivity";
import { useHostelStore } from "../../store/useHostelStore";

const DashboardPage = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const [darkMode, setDarkMode] = useState(false);

  const [showSettingsModal, setShowSettingsModal] = useState(false);

  const student = useHostelStore((state) => state.student);
  const isLoggedIn = useHostelStore((state) => state.isLoggedIn);
  const logoutStudent = useHostelStore((state) => state.logoutStudent);
  const getSameRoomActivities = useHostelStore(
    (state) => state.getSameRoomActivities,
  );

  const sameRoomActivities = getSameRoomActivities();

  const lastActivity = sameRoomActivities[0];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const handleLogout = () => {
    logoutStudent();
    setShowSettingsModal(false);
    navigate("/");
  };

  return (
    <>
      <div
        className={`min-h-screen pb-36 ${
          darkMode ? "bg-[#111111]" : "bg-[#F3F3F3]"
        }`}
      >
        <div className="mx-auto max-w-md">
          {/* TOP BLACK SECTION */}
          <div className="relative overflow-hidden bg-[#111111] px-5 pb-14 pt-6">
            {/* TOP CURVES */}
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/[0.03]" />

            <div className="absolute -left-10 top-20 h-40 w-40 rounded-full bg-white/[0.02]" />

            {/* SMART ACCESS */}
            <div className="relative z-10">
              <div className="mb-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white">
                Smart Access
              </div>

              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <h2 className="max-w-[240px] text-[32px] font-bold leading-[1.05] tracking-[-1.4px] text-white">
                    BIU Hostel QR Key System
                  </h2>

                  <p className="mt-4 max-w-[270px] text-[13px] leading-6 text-gray-300">
                    Secure hostel key collection and drop verification.
                  </p>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-black shadow-lg">
                  <QrCode size={26} />
                </div>
              </div>

              {/* LAST ACTIVITY */}
              <div className="rounded-[28px] border border-white/5 bg-white/10 p-4 backdrop-blur-xl">
                <p className="text-[11px] text-gray-300">Last key activity</p>

                <div className="mt-3 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[15px] font-semibold text-white">
                      {lastActivity
                        ? `${lastActivity.fullName} ${
                            lastActivity.type === "Dropped Key"
                              ? "dropped"
                              : "collected"
                          } Room ${lastActivity.roomNumber} key`
                        : "No key activity yet"}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-gray-300">
                      {lastActivity
                        ? `${lastActivity.hostel} • ${lastActivity.flat} • ${lastActivity.time}`
                        : "Scan a QR code to start"}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black">
                    {lastActivity?.type === "Dropped Key" ? (
                      <ArrowDownLeft size={18} />
                    ) : (
                      <ArrowUpRight size={18} />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* CURVED BOTTOM */}
            <div
              className={`absolute bottom-0 left-0 h-10 w-full rounded-t-[36px] ${
                darkMode ? "bg-[#111111]" : "bg-[#F3F3F3]"
              }`}
            />
          </div>

          {/* WHITE SECTION */}
          <div className="px-5 pt-0">
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
              onClick={() => setShowSettingsModal(true)}
              className="text-[#8E8E93]"
            >
              <Settings size={21} />
            </button>
          </div>
        </div>
      </div>

      {/* SETTINGS MODAL */}
      {showSettingsModal && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/40 p-5 backdrop-blur-sm md:items-center">
          <div
            className={`w-full max-w-sm overflow-hidden rounded-[32px] ${
              darkMode ? "bg-[#1A1A1A]" : "bg-white"
            }`}
          >
            {/* TOP */}
            <div
              className={`relative overflow-hidden p-5 ${
                darkMode ? "bg-[#202020]" : "bg-[#111111]"
              }`}
            >
              {/* CURVES */}
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/[0.04]" />

              <div className="absolute -left-6 bottom-0 h-24 w-24 rounded-full bg-white/[0.03]" />

              <div className="relative z-10">
                {/* CLOSE */}
                <div className="mb-5 flex justify-end">
                  <button
                    onClick={() => setShowSettingsModal(false)}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white"
                  >
                    <X size={17} />
                  </button>
                </div>

                {/* PROFILE */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative">
                    <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-2 border-white/10 bg-white/10">
                      <User size={34} className="text-white" />
                    </div>

                    <div className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-[#111111] bg-green-500" />
                  </div>

                  <h2 className="mt-4 text-[20px] font-bold text-white">
                    {student?.fullName || "Student"}
                  </h2>

                  <p className="mt-1 text-[11px] text-gray-400">
                    {student?.matricNumber || "No matric number"}
                  </p>

                  <div className="mt-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white">
                    Verified Resident
                  </div>

                  {student && (
                    <p className="mt-3 max-w-[240px] text-center text-[11px] leading-5 text-gray-400">
                      {student.hostel} • {student.flat} • Room{" "}
                      {student.roomNumber}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* SETTINGS */}
            <div className="space-y-3 p-5">
              {/* DARK MODE */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`flex w-full items-center justify-between rounded-[24px] p-4 ${
                  darkMode ? "bg-[#232323]" : "bg-[#F7F7F7]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
                      darkMode ? "bg-[#2A2A2A]" : "bg-white"
                    }`}
                  >
                    {darkMode ? (
                      <Sun size={18} className="text-yellow-400" />
                    ) : (
                      <Moon size={18} className="text-[#111111]" />
                    )}
                  </div>

                  <div className="text-left">
                    <p
                      className={`text-sm font-semibold ${
                        darkMode ? "text-white" : "text-[#111111]"
                      }`}
                    >
                      Appearance
                    </p>

                    <p
                      className={`mt-1 text-[11px] ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      Switch dark mode
                    </p>
                  </div>
                </div>

                <div
                  className={`h-7 w-12 rounded-full p-1 transition-all ${
                    darkMode ? "bg-white" : "bg-[#D1D5DB]"
                  }`}
                >
                  <div
                    className={`h-5 w-5 rounded-full bg-black transition-all ${
                      darkMode ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </div>
              </button>

              {/* PROFILE */}
              <button
                className={`flex w-full items-center justify-between rounded-[24px] p-4 ${
                  darkMode ? "bg-[#232323]" : "bg-[#F7F7F7]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
                      darkMode ? "bg-[#2A2A2A]" : "bg-white"
                    }`}
                  >
                    <User
                      size={18}
                      className={darkMode ? "text-white" : "text-[#111111]"}
                    />
                  </div>

                  <div className="text-left">
                    <p
                      className={`text-sm font-semibold ${
                        darkMode ? "text-white" : "text-[#111111]"
                      }`}
                    >
                      Resident Profile
                    </p>

                    <p
                      className={`mt-1 text-[11px] ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {student
                        ? `${student.hostel}, ${student.flat}, Room ${student.roomNumber}`
                        : "View hostel details"}
                    </p>
                  </div>
                </div>
              </button>

              {/* ROOM MEMBERS ACTIVITY */}
              <div
                className={`rounded-[24px] p-4 ${
                  darkMode ? "bg-[#232323]" : "bg-[#F7F7F7]"
                }`}
              >
                <p
                  className={`text-sm font-semibold ${
                    darkMode ? "text-white" : "text-[#111111]"
                  }`}
                >
                  Room Activity
                </p>

                <p
                  className={`mt-1 text-[11px] leading-5 ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {sameRoomActivities.length} activity record
                  {sameRoomActivities.length === 1 ? "" : "s"} from this same
                  hostel, flat, and room
                </p>
              </div>

              {/* LOGOUT */}
              <button
                onClick={handleLogout}
                className="flex w-full items-center justify-between rounded-[24px] bg-red-500 p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/20">
                    <LogOut size={18} className="text-white" />
                  </div>

                  <div className="text-left">
                    <p className="text-sm font-semibold text-white">Logout</p>

                    <p className="mt-1 text-[11px] text-red-100">
                      Account data will remain saved
                    </p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardPage;
