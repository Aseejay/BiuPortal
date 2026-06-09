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

import { useHostelStore } from "../../store/useHostelStore";

const ActivityPage = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const activities = useHostelStore((state) => state.activities);
  const student = useHostelStore((state) => state.student);
  const isLoggedIn = useHostelStore((state) => state.isLoggedIn);

  const latestActivity = activities[0];

  const droppedCount = activities.filter(
    (activity) => activity.type === "Dropped Key",
  ).length;

  const collectedCount = activities.filter(
    (activity) => activity.type === "Collected Key",
  ).length;

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
              <p className="text-[11px] text-gray-300">Total Activity</p>

              <h2 className="mt-2 text-[22px] font-bold text-white">
                {activities.length}
              </h2>
            </div>

            <div className="rounded-[24px] bg-white/10 p-4 backdrop-blur-xl">
              <p className="text-[11px] text-gray-300">Current Status</p>

              <h2 className="mt-2 text-sm font-semibold text-white">
                {latestActivity ? latestActivity.status : "No Activity"}
              </h2>
            </div>
          </div>

          {/* STUDENT INFO */}
          {student && (
            <div className="mt-3 rounded-[24px] bg-white/10 p-4 backdrop-blur-xl">
              <p className="text-[11px] text-gray-300">Resident</p>

              <h2 className="mt-2 text-sm font-semibold text-white">
                {student.fullName}
              </h2>

              <p className="mt-1 text-[11px] leading-5 text-gray-300">
                {student.hostel} • {student.flat} • Room {student.roomNumber}
              </p>
            </div>
          )}
        </div>

        {/* EXTRA STATS */}
        <div className="mb-6 grid grid-cols-2 gap-3">
          <div className="rounded-[24px] bg-white p-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            <p className="text-[11px] text-gray-500">Dropped</p>

            <h2 className="mt-2 text-[22px] font-bold text-[#16A34A]">
              {droppedCount}
            </h2>
          </div>

          <div className="rounded-[24px] bg-white p-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            <p className="text-[11px] text-gray-500">Collected</p>

            <h2 className="mt-2 text-[22px] font-bold text-[#2563EB]">
              {collectedCount}
            </h2>
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

        {/* EMPTY STATE */}
        {activities.length === 0 && (
          <div className="rounded-[30px] bg-white p-6 text-center shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F3F3F3]">
              <QrCode size={24} className="text-[#111111]" />
            </div>

            <h3 className="mt-4 text-[16px] font-semibold text-[#111111]">
              No activity yet
            </h3>

            <p className="mt-2 text-[13px] leading-6 text-gray-500">
              Scan a drop or collect QR code to start recording hostel key
              activity.
            </p>

            <button
              onClick={() => navigate("/scan")}
              className="mt-5 rounded-full bg-[#111111] px-5 py-3 text-xs font-semibold text-white"
            >
              Scan QR Code
            </button>
          </div>
        )}

        {/* ACTIVITIES */}
        <div className="space-y-4">
          {activities.map((activity) => {
            const isDrop = activity.type === "Dropped Key";

            const Icon = isDrop ? ArrowDownLeft : ArrowUpRight;

            const iconBg = isDrop ? "bg-[#DCFCE7]" : "bg-[#DBEAFE]";
            const iconColor = isDrop ? "text-[#16A34A]" : "text-[#2563EB]";

            const statusBg = isDrop ? "bg-[#DCFCE7]" : "bg-[#DBEAFE]";
            const statusColor = isDrop ? "text-[#16A34A]" : "text-[#2563EB]";

            return (
              <div
                key={activity.id}
                className="rounded-[30px] bg-white p-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
              >
                <div className="flex items-start justify-between gap-3">
                  {/* LEFT */}
                  <div className="flex gap-3">
                    {/* ICON */}
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${iconBg}`}
                    >
                      <Icon size={22} className={iconColor} />
                    </div>

                    {/* CONTENT */}
                    <div>
                      <h3 className="text-[15px] font-semibold text-[#111111]">
                        {activity.type}
                      </h3>

                      <p className="mt-1 text-xs font-medium text-gray-400">
                        {activity.hostel} • {activity.flat} • Room{" "}
                        {activity.roomNumber}
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
                  <div className={`rounded-full px-3 py-1 ${statusBg}`}>
                    <span
                      className={`text-[10px] font-semibold tracking-wide ${statusColor}`}
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
