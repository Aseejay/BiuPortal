// src/pages/scan/page.tsx

import { useEffect } from "react";

import { ArrowLeft, ScanLine, ShieldCheck } from "lucide-react";

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
    <div className="min-h-screen bg-[#F5F5F5] px-5 py-6">
      <div className="mx-auto max-w-md">
        <div className="mb-8 flex items-center">
          <button
            onClick={() => navigate(-1)}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white"
          >
            <ArrowLeft size={20} className="text-gray-700" />
          </button>
        </div>

        <div className="mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2">
            <ShieldCheck size={15} className="text-[#16A34A]" />

            <span className="text-xs font-semibold text-gray-700">
              Secure QR Verification
            </span>
          </div>

          <h1 className="mt-5 text-[32px] font-semibold leading-none tracking-tight text-gray-900">
            Scan QR Code
          </h1>

          <p className="mt-3 text-[13px] leading-6 text-gray-500">
            Scan the porter QR code to securely drop or collect your hostel key.
          </p>
        </div>

        <div className="rounded-[34px] bg-white p-4">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F5F5F5]">
              <ScanLine size={20} className="text-gray-700" />
            </div>

            <div>
              <h2 className="text-[16px] font-semibold text-gray-900">
                QR Scanner
              </h2>

              <p className="mt-1 text-xs text-gray-500">
                Align QR code within frame
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] bg-[#F8F8F8] p-3">
            <div id="reader" className="overflow-hidden rounded-[24px]" />
          </div>
        </div>

        <div className="mt-5 rounded-[30px] bg-white p-4">
          <h3 className="text-[15px] font-semibold text-gray-900">
            Before scanning
          </h3>

          <div className="mt-4 space-y-3">
            <div className="flex items-start gap-3">
              <div className="mt-1.5 h-2 w-2 rounded-full bg-[#8B5CF6]" />

              <p className="text-xs leading-6 text-gray-500">
                Ensure you are physically at the porter&apos;s lodge.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1.5 h-2 w-2 rounded-full bg-[#8B5CF6]" />

              <p className="text-xs leading-6 text-gray-500">
                Use only the official QR code provided by the porter.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1.5 h-2 w-2 rounded-full bg-[#8B5CF6]" />

              <p className="text-xs leading-6 text-gray-500">
                Hold your phone steady for faster scanning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScanPage;
