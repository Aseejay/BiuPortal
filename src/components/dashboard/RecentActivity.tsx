// src/components/dashboard/RecentActivity.tsx

import { ArrowDownLeft, ArrowUpRight, Clock3 } from "lucide-react";

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

const RecentActivity = () => {
  return (
    <div className="rounded-[34px] bg-white p-5">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-[26px] font-semibold text-gray-900">
            Recent Activity
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Latest hostel key actions
          </p>
        </div>

        <button className="rounded-full bg-[#F5F5F5] px-4 py-2 text-sm font-medium text-gray-700">
          View all
        </button>
      </div>

      <div className="space-y-4">
        {activities.map((activity, index) => {
          const Icon = activity.icon;

          return (
            <div key={index} className="rounded-[28px] bg-[#F8F8F8] p-4">
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${activity.iconBg}`}
                  >
                    <Icon size={24} className={activity.iconColor} />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {activity.type}
                    </h3>

                    <div className="mt-2 flex items-center gap-2">
                      <Clock3 size={14} className="text-gray-400" />

                      <p className="text-sm text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                </div>

                <div className={`rounded-full px-3 py-1 ${activity.statusBg}`}>
                  <span
                    className={`text-xs font-semibold ${activity.statusColor}`}
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
