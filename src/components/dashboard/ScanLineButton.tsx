// src/components/dashboard/ScanButton.tsx

import { ScanLine } from "lucide-react";

const ScanButton = () => {
  return (
    <button className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 text-sm font-semibold text-white">
      <ScanLine size={20} />
      Scan QR Code
    </button>
  );
};

export default ScanButton;
