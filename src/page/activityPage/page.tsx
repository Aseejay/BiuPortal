// src/pages/activity/page.tsx

import { useEffect } from "react";

import { ArrowDownLeft, ArrowLeft, ArrowUpRight, Clock3 } from "lucide-react";

import { useLocation, useNavigate } from "react-router-dom";

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
  {
    type: "Dropped Key",
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
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#F5F5F5] px-5 py-6">
      <div className="mx-auto max-w-md">
        <div className="mb-8 flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white"
          >
            <ArrowLeft size={20} className="text-gray-700" />
          </button>

          <div>
            <p className="text-sm font-medium text-gray-400">Hostel Activity</p>

            <h1 className="mt-1 text-[32px] font-semibold leading-none tracking-tight text-gray-900">
              Recent Activity
            </h1>
          </div>
        </div>

        <div className="space-y-4">
          {activities.map((activity, index) => {
            const Icon = activity.icon;

            return (
              <div key={index} className="rounded-[28px] bg-white p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex gap-3">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${activity.iconBg}`}
                    >
                      <Icon size={22} className={activity.iconColor} />
                    </div>

                    <div>
                      <h3 className="text-[16px] font-semibold text-gray-900">
                        {activity.type}
                      </h3>

                      <div className="mt-2 flex items-center gap-1.5">
                        <Clock3 size={13} className="text-gray-400" />

                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`rounded-full px-3 py-1 ${activity.statusBg}`}
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
    </div>
  );
};

export default ActivityPage;
