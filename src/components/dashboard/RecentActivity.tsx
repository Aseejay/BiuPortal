// src/components/dashboard/RecentActivity.tsx

import { ArrowDownLeft, ArrowUpRight, Clock3 } from "lucide-react";

import { useNavigate } from "react-router-dom";

import { useHostelStore } from "../../store/useHostelStore";

interface RecentActivityProps {
  darkMode?: boolean;
}

const RecentActivity = ({ darkMode = false }: RecentActivityProps) => {
  const navigate = useNavigate();

  const activities = useHostelStore((state) => state.activities);

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
        {activities.length === 0 && (
          <div
            className={`rounded-[26px] p-5 text-center ${
              darkMode ? "bg-[#232323]" : "bg-[#F8F8F8]"
            }`}
          >
            <p
              className={`text-sm font-semibold ${
                darkMode ? "text-white" : "text-[#111111]"
              }`}
            >
              No activity yet
            </p>

            <p
              className={`mt-1 text-xs ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Scan a drop or collect QR code to see activity here.
            </p>
          </div>
        )}

        {activities.slice(0, 5).map((activity) => {
          const isDrop = activity.type === "Dropped Key";

          const Icon = isDrop ? ArrowDownLeft : ArrowUpRight;

          const iconBg = isDrop ? "bg-[#DCFCE7]" : "bg-[#DBEAFE]";

          const iconColor = isDrop ? "text-[#16A34A]" : "text-[#2563EB]";

          const statusBg = isDrop ? "bg-[#DCFCE7]" : "bg-[#DBEAFE]";

          const statusColor = isDrop ? "text-[#16A34A]" : "text-[#2563EB]";

          return (
            <div
              key={activity.id}
              className={`rounded-[26px] p-4 transition-all ${
                darkMode ? "bg-[#232323]" : "bg-[#F8F8F8]"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                {/* LEFT */}
                <div className="flex gap-3">
                  {/* ICON */}
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${iconBg}`}
                  >
                    <Icon size={20} className={iconColor} />
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
                      {activity.hostel} • {activity.flat} • Room{" "}
                      {activity.roomNumber}
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
                <div className={`rounded-full px-3 py-1 ${statusBg}`}>
                  <span
                    className={`text-[9px] font-bold tracking-wide ${statusColor}`}
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
