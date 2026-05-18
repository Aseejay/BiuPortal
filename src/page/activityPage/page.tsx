// src/pages/activity/page.tsx

import { useEffect } from "react";

import {
  ArrowDownLeft,
  ArrowLeft,
  ArrowUpRight,
  Clock3,
  QrCode,
} from "lucide-react";

import { useLocation, useNavigate } from "react-router-dom";

const activities = [
  {
    type: "Dropped Key",
    room: "Room A-204",
    time: "Today, 8:45 AM",
    status: "AT PORTER",
    icon: ArrowDownLeft,
    iconBg: "bg-[#DCFCE7]",
    iconColor: "text-[#16A34A]",
    statusBg: "bg-[#DCFCE7]",
    statusColor: "text-[#16A34A]",
  },
  {
    type: "Collected Key",
    room: "Room B-105",
    time: "Yesterday, 7:10 PM",
    status: "COLLECTED",
    icon: ArrowUpRight,
    iconBg: "bg-[#DBEAFE]",
    iconColor: "text-[#2563EB]",
    statusBg: "bg-[#DBEAFE]",
    statusColor: "text-[#2563EB]",
  },
  {
    type: "Dropped Key",
    room: "Room C-302",
    time: "Monday, 9:30 AM",
    status: "AT PORTER",
    icon: ArrowDownLeft,
    iconBg: "bg-[#DCFCE7]",
    iconColor: "text-[#16A34A]",
    statusBg: "bg-[#DCFCE7]",
    statusColor: "text-[#16A34A]",
  },
  {
    type: "Collected Key",
    room: "Room D-112",
    time: "Sunday, 6:15 PM",
    status: "COLLECTED",
    icon: ArrowUpRight,
    iconBg: "bg-[#DBEAFE]",
    iconColor: "text-[#2563EB]",
    statusBg: "bg-[#DBEAFE]",
    statusColor: "text-[#2563EB]",
  },
];

const ActivityPage = () => {
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#F3F3F3] px-5 py-6">
      <div className="mx-auto max-w-md">
        {/* HEADER */}
        <div className="mb-7 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm"
          >
            <ArrowLeft size={18} className="text-[#111111]" />
          </button>

          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
            <QrCode size={15} className="text-[#8B5CF6]" />

            <span className="text-[11px] font-semibold text-[#111111]">
              Smart Activity
            </span>
          </div>
        </div>

        {/* HERO */}
        <div className="mb-6 overflow-hidden rounded-[34px] bg-[#111111] p-5">
          <div className="mb-8 flex items-start justify-between">
            <div>
              <div className="mb-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white">
                Hostel Activity
              </div>

              <h1 className="max-w-[220px] text-[28px] font-bold leading-tight tracking-[-1px] text-white">
                Recent Key Activity
              </h1>

              <p className="mt-3 text-[13px] leading-6 text-gray-300">
                Monitor all recent hostel key collection and drop activities.
              </p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black">
              <Clock3 size={22} />
            </div>
          </div>

          {/* QUICK STATS */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-[24px] bg-white/10 p-4 backdrop-blur-xl">
              <p className="text-[11px] text-gray-300">Today Activity</p>

              <h2 className="mt-2 text-[22px] font-bold text-white">12</h2>
            </div>

            <div className="rounded-[24px] bg-white/10 p-4 backdrop-blur-xl">
              <p className="text-[11px] text-gray-300">Current Status</p>

              <h2 className="mt-2 text-sm font-semibold text-white">Active</h2>
            </div>
          </div>
        </div>

        {/* TITLE */}
        <div className="mb-4">
          <h2 className="text-[20px] font-bold tracking-[-0.4px] text-[#111111]">
            Activity History
          </h2>

          <p className="mt-1 text-[13px] text-gray-500">
            Recent hostel QR key actions
          </p>
        </div>

        {/* ACTIVITIES */}
        <div className="space-y-4">
          {activities.map((activity, index) => {
            const Icon = activity.icon;

            return (
              <div
                key={index}
                className="rounded-[30px] bg-white p-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
              >
                <div className="flex items-start justify-between gap-3">
                  {/* LEFT */}
                  <div className="flex gap-3">
                    {/* ICON */}
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${activity.iconBg}`}
                    >
                      <Icon size={22} className={activity.iconColor} />
                    </div>

                    {/* CONTENT */}
                    <div>
                      <h3 className="text-[15px] font-semibold text-[#111111]">
                        {activity.type}
                      </h3>

                      <p className="mt-1 text-xs font-medium text-gray-400">
                        {activity.room}
                      </p>

                      <div className="mt-3 flex items-center gap-1.5">
                        <Clock3 size={12} className="text-gray-400" />

                        <p className="text-[11px] text-gray-500">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* STATUS */}
                  <div
                    className={`rounded-full px-3 py-1 ${activity.statusBg}`}
                  >
                    <span
                      className={`text-[10px] font-semibold tracking-wide ${activity.statusColor}`}
                    >
                      {activity.status}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* SPACE */}
        <div className="h-8" />
      </div>
    </div>
  );
};

export default ActivityPage;
