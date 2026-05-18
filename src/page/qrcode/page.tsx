// src/pages/scan/page.tsx

import { useEffect } from "react";

import { ArrowLeft, QrCode, ScanLine, ShieldCheck } from "lucide-react";

import { Html5Qrcode } from "html5-qrcode";

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
    const html5QrCode = new Html5Qrcode("reader");

    const startScanner = async () => {
      try {
        const devices = await Html5Qrcode.getCameras();

        if (!devices || devices.length === 0) {
          return;
        }

        const backCamera =
          devices.find((device) =>
            device.label.toLowerCase().includes("back"),
          ) || devices[0];

        await html5QrCode.start(
          backCamera.id,
          {
            fps: 10,
            qrbox: {
              width: 260,
              height: 260,
            },
          },
          (decodedText) => {
            console.log(decodedText);

            alert(`QR Scanned Successfully: ${decodedText}`);
          },
          () => {},
        );
      } catch (error) {
        console.log(error);
      }
    };

    startScanner();

    return () => {
      html5QrCode.stop().catch(() => {});
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F3F3F3] px-5 py-6">
      <div className="mx-auto max-w-md">
        {/* HEADER */}
        <div className="mb-7 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm"
          >
            <ArrowLeft size={20} className="text-[#111111]" />
          </button>

          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
            <ShieldCheck size={15} className="text-[#16A34A]" />

            <span className="text-xs font-semibold text-[#111111]">
              Secure Scanner
            </span>
          </div>
        </div>

        {/* HERO */}
        <div className="mb-6 rounded-[36px] bg-[#111111] p-6">
          <div className="mb-10 flex items-start justify-between">
            <div>
              <div className="mb-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white">
                Smart Access
              </div>

              <h1 className="max-w-[220px] text-[34px] font-bold leading-none tracking-[-1px] text-white">
                Scan QR Code
              </h1>

              <p className="mt-4 text-[13px] leading-6 text-gray-300">
                Scan the porter QR code to securely collect or drop hostel keys.
              </p>
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-black">
              <QrCode size={28} />
            </div>
          </div>

          {/* SCANNER CARD */}
          <div className="rounded-[30px] bg-white/10 p-4 backdrop-blur-xl">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-black">
                <ScanLine size={20} />
              </div>

              <div>
                <h2 className="text-[16px] font-semibold text-white">
                  QR Scanner
                </h2>

                <p className="mt-1 text-xs text-gray-300">
                  Align QR within frame
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[30px] bg-black p-3">
              <div id="reader" className="overflow-hidden rounded-[24px]" />
            </div>
          </div>
        </div>

        {/* INFO CARD */}
        <div className="rounded-[34px] bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#8B5CF6]/10">
              <ShieldCheck size={22} className="text-[#8B5CF6]" />
            </div>

            <div>
              <h3 className="text-[17px] font-semibold text-[#111111]">
                Before Scanning
              </h3>

              <p className="mt-1 text-xs text-gray-500">
                Important scanning guidelines
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="mt-2 h-2.5 w-2.5 rounded-full bg-[#8B5CF6]" />

              <p className="text-[13px] leading-6 text-gray-500">
                Ensure you are physically at the porter&apos;s lodge before
                scanning.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-2 h-2.5 w-2.5 rounded-full bg-[#8B5CF6]" />

              <p className="text-[13px] leading-6 text-gray-500">
                Use only official QR codes issued by authorized hostel staff.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-2 h-2.5 w-2.5 rounded-full bg-[#8B5CF6]" />

              <p className="text-[13px] leading-6 text-gray-500">
                Hold your device steady and ensure proper lighting for fast
                scanning.
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM SPACE */}
        <div className="h-10" />
      </div>
    </div>
  );
};

export default ScanPage;
