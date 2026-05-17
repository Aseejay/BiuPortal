// src/pages/dashboard/page.tsx

import { Bell, Home, QrCode, Settings, Search } from "lucide-react";

import ProfileCard from "../../components/dashboard/ProfileCard";
import KeyStatusCard from "../../components/dashboard/KeyCardStatus";
import ScanButton from "../../components/dashboard/ScanLineButton";
import RecentActivity from "../../components/dashboard/RecentActivity";

const DashboardPage = () => {
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
          <button className="rounded-full bg-[#111111] px-5 py-3 text-sm font-medium text-white whitespace-nowrap">
            Overview
          </button>

          <button className="rounded-full bg-white px-5 py-3 text-sm font-medium text-gray-600 whitespace-nowrap">
            Key Status
          </button>

          <button className="rounded-full bg-white px-5 py-3 text-sm font-medium text-gray-600 whitespace-nowrap">
            Activity
          </button>
        </div>

        <div className="space-y-5">
          <ProfileCard />

          <KeyStatusCard />

          <RecentActivity />
        </div>
      </div>

      <div className="fixed bottom-6 left-1/2 z-50 w-[90%] max-w-sm -translate-x-1/2">
        <div className="flex items-center justify-between rounded-full bg-[#111111] px-6 py-4">
          <button className="flex h-11 w-11 items-center justify-center rounded-full text-white">
            <Home size={22} />
          </button>

          <button className="flex h-11 w-11 items-center justify-center rounded-full text-[#8E8E93]">
            <QrCode size={22} />
          </button>

          <button className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-black">
            <Settings size={22} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
