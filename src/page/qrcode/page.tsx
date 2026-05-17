// src/pages/scan/page.tsx

import { useEffect } from "react";

import { ArrowLeft, Flashlight, ScanLine } from "lucide-react";

import { Html5QrcodeScanner, Html5QrcodeSupportedFormats } from "html5-qrcode";

import { useLocation, useNavigate } from "react-router-dom";

const ScanPage = () => {
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        fps: 10,
        qrbox: {
          width: 250,
          height: 250,
        },
        supportedScanTypes: [0],
        formatsToSupport: [Html5QrcodeSupportedFormats.QR_CODE],
      },
      false,
    );

    scanner.render(
      (decodedText) => {
        console.log("QR Result:", decodedText);

        alert(`QR Scanned: ${decodedText}`);
      },
      (error) => {
        console.log(error);
      },
    );

    return () => {
      scanner.clear().catch(() => {});
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F5F5] px-5 py-6">
      <div className="mx-auto max-w-md">
        <div className="mb-8 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white"
          >
            <ArrowLeft size={20} className="text-gray-700" />
          </button>

          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
            <Flashlight size={20} className="text-gray-700" />
          </button>
        </div>

        <div className="mb-8">
          <p className="text-sm font-medium text-gray-400">QR Scanner</p>

          <h1 className="mt-2 text-[34px] font-semibold leading-none tracking-tight text-gray-900">
            Scan QR Code
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            Scan the porter QR code to drop or collect your hostel key.
          </p>
        </div>

        <div className="rounded-[36px] bg-white p-5">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5F5F5]">
              <ScanLine size={22} className="text-gray-700" />
            </div>

            <div>
              <h2 className="text-[18px] font-semibold text-gray-900">
                Camera Scanner
              </h2>

              <p className="mt-1 text-xs text-gray-500">
                Position QR code inside the frame
              </p>
            </div>
          </div>

          <div id="reader" className="overflow-hidden rounded-[28px]" />
        </div>

        <div className="mt-5 rounded-[28px] bg-white p-4">
          <p className="text-sm font-semibold text-gray-900">Instructions</p>

          <div className="mt-3 space-y-3">
            <div className="flex gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-[#8B5CF6]" />

              <p className="text-xs leading-6 text-gray-500">
                Ensure you are at the porter&apos;s lodge before scanning.
              </p>
            </div>

            <div className="flex gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-[#8B5CF6]" />

              <p className="text-xs leading-6 text-gray-500">
                Hold your phone steady while scanning the QR code.
              </p>
            </div>

            <div className="flex gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-[#8B5CF6]" />

              <p className="text-xs leading-6 text-gray-500">
                Wait for confirmation after a successful scan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScanPage;
