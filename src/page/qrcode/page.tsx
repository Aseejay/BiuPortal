// src/pages/scan/page.tsx

import { useEffect, useRef, useState } from "react";

import {
  ArrowLeft,
  CheckCircle2,
  QrCode,
  ScanLine,
  ShieldCheck,
  XCircle,
} from "lucide-react";

import { Html5Qrcode } from "html5-qrcode";

import { useLocation, useNavigate } from "react-router-dom";

import { useHostelStore } from "../../store/useHostelStore";

const VALID_QR_TEXT = "hostel-key";

const ScanPage = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const [scanMessage, setScanMessage] = useState("");
  const [scanStatus, setScanStatus] = useState<"success" | "error" | "">("");

  const hasScannedRef = useRef(false);

  const student = useHostelStore((state) => state.student);
  const isLoggedIn = useHostelStore((state) => state.isLoggedIn);
  const scanKeyQrCode = useHostelStore((state) => state.scanKeyQrCode);
  const getNextKeyAction = useHostelStore((state) => state.getNextKeyAction);

  const nextAction = getNextKeyAction();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  useEffect(() => {
    if (!isLoggedIn || !student) {
      navigate("/");
    }
  }, [isLoggedIn, student, navigate]);

  useEffect(() => {
    if (!isLoggedIn || !student) {
      return;
    }

    const html5QrCode = new Html5Qrcode("reader");

    const stopScanner = async () => {
      try {
        const scannerState = html5QrCode.getState();

        if (scannerState === 2) {
          await html5QrCode.stop();
        }
      } catch (error) {
        console.log(error);
      }
    };

    const startScanner = async () => {
      try {
        const devices = await Html5Qrcode.getCameras();

        if (!devices || devices.length === 0) {
          setScanStatus("error");
          setScanMessage("No camera found on this device");
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
          async (decodedText) => {
            if (hasScannedRef.current) {
              return;
            }

            const qrText = decodedText.trim().toLowerCase();

            if (qrText !== VALID_QR_TEXT) {
              setScanStatus("error");
              setScanMessage(
                "Invalid QR code. Please scan the official hostel key QR code.",
              );
              return;
            }

            hasScannedRef.current = true;

            const result = scanKeyQrCode();

            if (!result.success) {
              setScanStatus("error");
              setScanMessage(result.message);
              return;
            }

            setScanStatus("success");
            setScanMessage(result.message);

            await stopScanner();

            setTimeout(() => {
              navigate("/dashboard");
            }, 1200);
          },
          () => {},
        );
      } catch (error) {
        console.log(error);
        setScanStatus("error");
        setScanMessage("Unable to start scanner. Please allow camera access.");
      }
    };

    startScanner();

    return () => {
      stopScanner();
    };
  }, [isLoggedIn, navigate, scanKeyQrCode, student]);

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
                Scan the hostel QR code to automatically drop or collect your
                key.
              </p>
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-black">
              <QrCode size={28} />
            </div>
          </div>

          {/* NEXT ACTION CARD */}
          <div className="mb-4 rounded-[26px] bg-white p-4">
            <p className="text-[11px] font-medium text-gray-500">
              Next scan action
            </p>

            <h2 className="mt-1 text-[18px] font-bold text-[#111111]">
              {nextAction === "Dropped Key" ? "Drop Key" : "Collect Key"}
            </h2>

            <p className="mt-1 text-xs leading-5 text-gray-500">
              The system checks your last key activity and automatically records
              the opposite action.
            </p>
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
                  QR code text must be hostel-key
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[30px] bg-black p-3">
              <div id="reader" className="overflow-hidden rounded-[24px]" />
            </div>

            {scanMessage && (
              <div
                className={`mt-4 flex items-center gap-3 rounded-[22px] p-4 ${
                  scanStatus === "success" ? "bg-[#DCFCE7]" : "bg-[#FEE2E2]"
                }`}
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${
                    scanStatus === "success" ? "bg-[#16A34A]" : "bg-[#DC2626]"
                  }`}
                >
                  {scanStatus === "success" ? (
                    <CheckCircle2 size={20} className="text-white" />
                  ) : (
                    <XCircle size={20} className="text-white" />
                  )}
                </div>

                <div>
                  <p
                    className={`text-sm font-semibold ${
                      scanStatus === "success"
                        ? "text-[#166534]"
                        : "text-[#991B1B]"
                    }`}
                  >
                    {scanStatus === "success" ? "Success" : "Scan Error"}
                  </p>

                  <p
                    className={`mt-1 text-xs leading-5 ${
                      scanStatus === "success"
                        ? "text-[#166534]"
                        : "text-[#991B1B]"
                    }`}
                  >
                    {scanMessage}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* STUDENT CARD */}
        {student && (
          <div className="mb-5 rounded-[34px] bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            <div className="mb-1 flex items-center justify-between">
              <p className="text-[12px] font-medium text-gray-400">
                Registered Resident
              </p>

              <span className="rounded-full bg-[#DCFCE7] px-3 py-1 text-[10px] font-bold text-[#16A34A]">
                VERIFIED
              </span>
            </div>

            <h3 className="mt-2 text-[17px] font-semibold text-[#111111]">
              {student.fullName}
            </h3>

            <p className="mt-1 text-xs text-gray-500">{student.matricNumber}</p>

            <p className="mt-3 text-[13px] leading-6 text-gray-500">
              {student.hostel} • {student.flat} • Room {student.roomNumber}
            </p>
          </div>
        )}

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
                You only need one QR code for both dropping and collecting.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-2 h-2.5 w-2.5 rounded-full bg-[#8B5CF6]" />

              <p className="text-[13px] leading-6 text-gray-500">
                If your last activity was drop, the next scan will collect. If
                your last activity was collect, the next scan will drop.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-2 h-2.5 w-2.5 rounded-full bg-[#8B5CF6]" />

              <p className="text-[13px] leading-6 text-gray-500">
                The QR code should contain only{" "}
                <span className="font-semibold text-[#111111]">hostel-key</span>
                .
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
