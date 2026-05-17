// src/components/dashboard/ProfileCard.tsx

import { BedDouble, Building2, MoreVertical } from "lucide-react";

const ProfileCard = () => {
  return (
    <div className="rounded-[34px] bg-white p-5">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="h-24 w-24 overflow-hidden rounded-[28px] bg-[#E5E7EB]">
            <img
              src="https://i.pravatar.cc/300"
              alt="profile"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-[28px] font-semibold leading-none text-gray-900">
              Samuel Asije
            </h2>

            <p className="mt-3 text-sm font-medium text-gray-400">
              BIU/23/CSC/001
            </p>
          </div>
        </div>

        <button className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F5F5F5]">
          <MoreVertical size={18} className="text-gray-500" />
        </button>
      </div>

      <div className="mt-6 flex gap-3">
        <div className="flex flex-1 items-center justify-center rounded-full bg-[#F5F5F5] px-4 py-3">
          <div className="flex items-center gap-2">
            <Building2 size={16} className="text-[#8B5CF6]" />

            <span className="text-sm font-semibold text-gray-700">
              Hope Hostel
            </span>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center rounded-full bg-[#F5F5F5] px-4 py-3">
          <div className="flex items-center gap-2">
            <BedDouble size={16} className="text-[#F59E0B]" />

            <span className="text-sm font-semibold text-gray-700">Room 14</span>
          </div>
        </div>
      </div>

      <div className="mt-7">
        <h3 className="text-[22px] font-semibold text-gray-900">About</h3>

        <p className="mt-3 text-[15px] leading-7 text-gray-500">
          Student of Benson Idahosa University. Registered resident of Hope
          Hostel using the BIU Smart Hostel Key Management System.
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
