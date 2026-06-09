// src/components/dashboard/RecentActivity.tsx

import { ArrowDownLeft, ArrowUpRight, Clock3 } from "lucide-react";

import { useNavigate } from "react-router-dom";

import { useHostelStore } from "../../store/useHostelStore";

interface RecentActivityProps {
  darkMode?: boolean;
}

const RecentActivity = ({ darkMode = false }: RecentActivityProps) => {
  const navigate = useNavigate();

  const getSameRoomActivities = useHostelStore(
    (state) => state.getSameRoomActivities,
  );

  const activities = getSameRoomActivities();

  return (
    <div
      className={`overflow-hidden rounded-[32px] transition-all duration-300 ${
        darkMode ? "bg-[#1A1A1A]" : "bg-white"
      } shadow-[0_8px_30px_rgba(0,0,0,0.04)]`}
    >
      {/* HEADER */}
      <div
        className={`border-b p-4 sm:p-5 ${
          darkMode ? "border-white/5" : "border-[#F3F4F6]"
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <h2
              className={`text-[17px] font-bold tracking-[-0.4px] sm:text-[18px] ${
                darkMode ? "text-white" : "text-[#111111]"
              }`}
            >
              Recent Activity
            </h2>

            <p
              className={`mt-1 text-[11px] leading-5 sm:text-[12px] ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Latest hostel QR key actions
            </p>
          </div>

          <button
            onClick={() => navigate("/activity")}
            className={`shrink-0 rounded-full px-3 py-2 text-[10px] font-semibold transition-all sm:px-4 sm:text-[11px] ${
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
      <div className="space-y-3 p-3 sm:p-4">
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
              className={`mt-1 text-xs leading-5 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Scan the hostel QR code to see activity here.
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
              className={`rounded-[26px] p-3 transition-all sm:p-4 ${
                darkMode ? "bg-[#232323]" : "bg-[#F8F8F8]"
              }`}
            >
              <div className="flex items-start gap-2 sm:gap-3">
                {/* ICON */}
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl sm:h-12 sm:w-12 ${iconBg}`}
                >
                  <Icon size={18} className={iconColor} />
                </div>

                {/* CONTENT */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0 flex-1">
                      <h3
                        className={`truncate text-[13px] font-semibold sm:text-[14px] ${
                          darkMode ? "text-white" : "text-[#111111]"
                        }`}
                      >
                        {activity.type}
                      </h3>

                      <p
                        className={`mt-1 truncate text-[10px] font-medium leading-5 sm:text-[11px] ${
                          darkMode ? "text-gray-500" : "text-gray-400"
                        }`}
                      >
                        {activity.fullName ? `${activity.fullName} • ` : ""}
                        {activity.hostel} • {activity.flat} • Room{" "}
                        {activity.roomNumber}
                      </p>
                    </div>

                    {/* STATUS */}
                    <div
                      className={`shrink-0 rounded-full px-2 py-1 sm:px-3 ${statusBg}`}
                    >
                      <span
                        className={`block whitespace-nowrap text-[8px] font-bold leading-none tracking-wide sm:text-[9px] ${statusColor}`}
                      >
                        {activity.status}
                      </span>
                    </div>
                  </div>

                  <div className="mt-2 flex min-w-0 items-center gap-1.5">
                    <Clock3
                      size={11}
                      className={`shrink-0 ${
                        darkMode ? "text-gray-500" : "text-gray-400"
                      }`}
                    />

                    <p
                      className={`truncate text-[10px] sm:text-[11px] ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {activity.time}
                    </p>
                  </div>
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
