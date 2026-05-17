// src/pages/dashboard/page.tsx

import { useEffect, useState } from "react";

import { Bell, Home, QrCode, Search, Settings } from "lucide-react";

import { useLocation, useNavigate } from "react-router-dom";

import ProfileCard from "../../components/dashboard/ProfileCard";
import KeyStatusCard from "../../components/dashboard/KeyCardStatus";
import RecentActivity from "../../components/dashboard/RecentActivity";

const DashboardPage = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname, activeTab]);

  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-32">
      <div className="mx-auto max-w-md px-5 pt-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-[34px] font-semibold tracking-tight text-gray-900">
              Dashboard
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Manage your hostel key activity
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
              <Search size={20} className="text-gray-700" />
            </button>

            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
              <Bell size={20} className="text-gray-700" />
            </button>
          </div>
        </div>

        <div className="mb-5 flex items-center gap-3 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab("overview")}
            className={`whitespace-nowrap rounded-full px-5 py-3 text-sm font-medium transition ${
              activeTab === "overview"
                ? "bg-[#111111] text-white"
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
                : "bg-white text-gray-600"
            }`}
          >
            Activity
          </button>
        </div>

        <div className="space-y-5">
          {activeTab === "overview" && (
            <>
              <ProfileCard />

              <KeyStatusCard />

              <RecentActivity />
            </>
          )}

          {activeTab === "key-status" && <KeyStatusCard />}

          {activeTab === "activity" && <RecentActivity />}
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
