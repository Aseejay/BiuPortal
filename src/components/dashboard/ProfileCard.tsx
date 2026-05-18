// src/components/dashboard/ProfileCard.tsx

import { BedDouble, Building2, MoreVertical, ShieldCheck } from "lucide-react";

interface ProfileCardProps {
  darkMode?: boolean;
}

const ProfileCard = ({ darkMode = false }: ProfileCardProps) => {
  return (
    <div
      className={`overflow-hidden rounded-[36px] transition-all duration-300 ${
        darkMode ? "bg-[#1A1A1A]" : "bg-white"
      } shadow-[0_8px_30px_rgba(0,0,0,0.04)]`}
    >
      {/* TOP SECTION */}
      <div
        className={`relative overflow-hidden p-5 ${
          darkMode ? "bg-[#202020]" : "bg-[#111111]"
        }`}
      >
        {/* BACKGROUND SHAPE */}
        <div className="absolute right-[-30px] top-[-30px] h-40 w-40 rounded-full bg-white/5" />

        <div className="relative z-10 flex items-start justify-between">
          <div className="flex items-center gap-4">
            {/* PROFILE IMAGE */}
            <div className="relative">
              <div className="h-24 w-24 overflow-hidden rounded-[28px] border-2 border-white/10">
                <img
                  src="https://i.pravatar.cc/300"
                  alt="profile"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* ACTIVE BADGE */}
              <div className="absolute bottom-1 right-1 h-5 w-5 rounded-full border-2 border-[#111111] bg-green-500" />
            </div>

            {/* USER INFO */}
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-[24px] font-bold tracking-[-0.5px] text-white">
                  Samuel Asije
                </h2>

                <ShieldCheck size={18} className="text-[#8B5CF6]" />
              </div>

              <p className="mt-2 text-xs font-medium tracking-wide text-gray-400">
                BIU/23/CSC/001
              </p>

              <div className="mt-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-xl">
                Verified Resident
              </div>
            </div>
          </div>

          {/* MENU BUTTON */}
          <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl">
            <MoreVertical size={18} className="text-white" />
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5">
        {/* INFO CARDS */}
        <div className="grid grid-cols-2 gap-3">
          {/* HOSTEL */}
          <div
            className={`rounded-[28px] p-4 ${
              darkMode ? "bg-[#232323]" : "bg-[#F7F7F7]"
            }`}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#8B5CF6]/10">
              <Building2 size={20} className="text-[#8B5CF6]" />
            </div>

            <p
              className={`mt-4 text-xs ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Hostel
            </p>

            <h3
              className={`mt-1 text-[17px] font-semibold tracking-[-0.3px] ${
                darkMode ? "text-white" : "text-[#111111]"
              }`}
            >
              Hope Hostel
            </h3>
          </div>

          {/* ROOM */}
          <div
            className={`rounded-[28px] p-4 ${
              darkMode ? "bg-[#232323]" : "bg-[#F7F7F7]"
            }`}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F59E0B]/10">
              <BedDouble size={20} className="text-[#F59E0B]" />
            </div>

            <p
              className={`mt-4 text-xs ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Assigned Room
            </p>

            <h3
              className={`mt-1 text-[17px] font-semibold tracking-[-0.3px] ${
                darkMode ? "text-white" : "text-[#111111]"
              }`}
            >
              Room 14
            </h3>
          </div>
        </div>

        {/* ABOUT */}
        <div
          className={`mt-5 rounded-[30px] p-5 ${
            darkMode ? "bg-[#232323]" : "bg-[#F7F7F7]"
          }`}
        >
          <div className="mb-3 flex items-center justify-between">
            <h3
              className={`text-[18px] font-semibold tracking-[-0.4px] ${
                darkMode ? "text-white" : "text-[#111111]"
              }`}
            >
              About Resident
            </h3>

            <div className="rounded-full bg-green-100 px-3 py-1 text-[11px] font-semibold text-green-700">
              Active
            </div>
          </div>

          <p
            className={`text-[14px] leading-7 ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Student of Benson Idahosa University currently registered under the
            BIU Smart Hostel Key Management System with authorized hostel access
            and verified residency details.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
