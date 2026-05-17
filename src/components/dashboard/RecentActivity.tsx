// src/components/dashboard/RecentActivity.tsx

import { ArrowDownLeft, ArrowUpRight, Clock3 } from "lucide-react";

import { useNavigate } from "react-router-dom";

interface RecentActivityProps {
  darkMode?: boolean;
}

const activities = [
  {
    type: "Dropped Key",
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
      className={`rounded-[30px] p-4 transition ${
        darkMode ? "bg-[#1C1C1E]" : "bg-white"
      }`}
    >
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2
            className={`text-[20px] font-semibold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Recent Activity
          </h2>

          <p
            className={`mt-1 text-xs ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Latest hostel key actions
          </p>
        </div>

        <button
          onClick={() => navigate("/activity")}
          className={`rounded-full px-3 py-2 text-xs font-medium transition ${
            darkMode
              ? "bg-[#2C2C2E] text-gray-300"
              : "bg-[#F5F5F5] text-gray-700"
          }`}
        >
          View all
        </button>
      </div>

      <div className="space-y-3">
        {activities.map((activity, index) => {
          const Icon = activity.icon;

          return (
            <div
              key={index}
              className={`rounded-[24px] p-3.5 ${
                darkMode ? "bg-[#2C2C2E]" : "bg-[#F8F8F8]"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex gap-3">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${activity.iconBg}`}
                  >
                    <Icon size={20} className={activity.iconColor} />
                  </div>

                  <div>
                    <h3
                      className={`text-[15px] font-semibold ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {activity.type}
                    </h3>

                    <div className="mt-1.5 flex items-center gap-1.5">
                      <Clock3
                        size={12}
                        className={darkMode ? "text-gray-500" : "text-gray-400"}
                      />

                      <p
                        className={`text-xs ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {activity.time}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className={`rounded-full px-2.5 py-1 ${activity.statusBg}`}
                >
                  <span
                    className={`text-[10px] font-semibold ${activity.statusColor}`}
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
