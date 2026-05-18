// src/components/dashboard/RecentActivity.tsx

import { ArrowDownLeft, ArrowUpRight, Clock3 } from "lucide-react";

import { useNavigate } from "react-router-dom";

interface RecentActivityProps {
  darkMode?: boolean;
}

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
];

const RecentActivity = ({ darkMode = false }: RecentActivityProps) => {
  const navigate = useNavigate();

  return (
    <div
      className={`overflow-hidden rounded-[32px] transition-all duration-300 ${
        darkMode ? "bg-[#1A1A1A]" : "bg-white"
      } shadow-[0_8px_30px_rgba(0,0,0,0.04)]`}
    >
      {/* HEADER */}
      <div
        className={`border-b p-5 ${
          darkMode ? "border-white/5" : "border-[#F3F4F6]"
        }`}
      >
        <div className="flex items-center justify-between">
          <div>
            <h2
              className={`text-[18px] font-bold tracking-[-0.4px] ${
                darkMode ? "text-white" : "text-[#111111]"
              }`}
            >
              Recent Activity
            </h2>

            <p
              className={`mt-1 text-[12px] ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Latest hostel QR key actions
            </p>
          </div>

          <button
            onClick={() => navigate("/activity")}
            className={`rounded-full px-4 py-2 text-[11px] font-semibold transition-all ${
              darkMode
                ? "bg-[#232323] text-gray-300"
                : "bg-[#F5F5F5] text-[#111111]"
            }`}
          >
            View all
          </button>
        </div>
      </div>

      {/* ACTIVITIES */}
      <div className="space-y-3 p-4">
        {activities.map((activity, index) => {
          const Icon = activity.icon;

          return (
            <div
              key={index}
              className={`rounded-[26px] p-4 transition-all ${
                darkMode ? "bg-[#232323]" : "bg-[#F8F8F8]"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                {/* LEFT */}
                <div className="flex gap-3">
                  {/* ICON */}
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${activity.iconBg}`}
                  >
                    <Icon size={20} className={activity.iconColor} />
                  </div>

                  {/* CONTENT */}
                  <div>
                    <h3
                      className={`text-[14px] font-semibold ${
                        darkMode ? "text-white" : "text-[#111111]"
                      }`}
                    >
                      {activity.type}
                    </h3>

                    <p
                      className={`mt-1 text-[11px] font-medium ${
                        darkMode ? "text-gray-500" : "text-gray-400"
                      }`}
                    >
                      {activity.room}
                    </p>

                    <div className="mt-2 flex items-center gap-1.5">
                      <Clock3
                        size={11}
                        className={darkMode ? "text-gray-500" : "text-gray-400"}
                      />

                      <p
                        className={`text-[11px] ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {activity.time}
                      </p>
                    </div>
                  </div>
                </div>

                {/* STATUS */}
                <div className={`rounded-full px-3 py-1 ${activity.statusBg}`}>
                  <span
                    className={`text-[9px] font-bold tracking-wide ${activity.statusColor}`}
                  >
                    {activity.status}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentActivity;
