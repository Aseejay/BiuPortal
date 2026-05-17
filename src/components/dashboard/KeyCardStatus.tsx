// src/components/dashboard/KeyStatusCard.tsx

import { Clock3, KeyRound, ScanLine } from "lucide-react";

interface KeyStatusCardProps {
  darkMode?: boolean;
}

const KeyStatusCard = ({ darkMode = false }: KeyStatusCardProps) => {
  return (
    <div
      className={`rounded-[34px] p-5 transition ${
        darkMode ? "bg-[#1C1C1E]" : "bg-white"
      }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="inline-flex rounded-full bg-[#DCFCE7] px-3 py-1">
            <span className="text-xs font-semibold text-[#16A34A]">
              AT PORTER
            </span>
          </div>

          <h2
            className={`mt-4 text-[26px] font-semibold leading-tight ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Key currently at the porter&apos;s lodge
          </h2>

          <div className="mt-4 flex items-center gap-2">
            <Clock3
              size={16}
              className={darkMode ? "text-gray-500" : "text-gray-400"}
            />

            <p
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Dropped at 8:45 AM Today
            </p>
          </div>
        </div>

        <div
          className={`flex h-20 w-20 items-center justify-center rounded-[28px] ${
            darkMode ? "bg-[#2C2C2E]" : "bg-[#F5F5F5]"
          }`}
        >
          <KeyRound size={34} className="text-[#8B5CF6]" />
        </div>
      </div>

      <div
        className={`mt-6 rounded-[28px] p-4 ${
          darkMode ? "bg-[#2C2C2E]" : "bg-[#F8F8F8]"
        }`}
      >
        <div className="flex items-center justify-between">
          <div>
            <p
              className={`text-base font-semibold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Scan QR Code
            </p>

            <p
              className={`mt-1 text-sm ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Scan to drop or collect key
            </p>
          </div>

          <button className="flex h-14 w-14 items-center justify-center rounded-full bg-[#111111]">
            <ScanLine size={24} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default KeyStatusCard;
