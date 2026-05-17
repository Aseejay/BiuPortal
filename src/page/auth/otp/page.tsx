// src/pages/verify-otp/page.tsx

import { useEffect, useState } from "react";

import { ArrowLeft, ArrowRight, MailCheck } from "lucide-react";

import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

const VerifyOtpPage = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const [otp, setOtp] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen bg-[#F5F5F5] px-5 py-6">
      <div className="mx-auto flex w-full max-w-md flex-col justify-between">
        <div>
          <button
            onClick={() => navigate(-1)}
            className="mb-10 flex h-12 w-12 items-center justify-center rounded-full bg-white"
          >
            <ArrowLeft size={20} className="text-gray-700" />
          </button>

          <div className="mb-10 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">
                Email Verification
              </p>

              <h1 className="mt-2 text-[38px] font-semibold leading-none tracking-tight text-gray-900">
                Verify OTP
              </h1>
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
              <MailCheck size={24} className="text-gray-700" />
            </div>
          </div>

          <div className="mb-5 rounded-[24px] border border-[#E5E7EB] bg-white p-4">
            <p className="text-sm font-semibold text-gray-900">
              OTP Sent Successfully
            </p>

            <p className="mt-1 text-xs leading-5 text-gray-500">
              A verification code has been sent to your email address.
            </p>

            <p className="mt-2 text-xs font-semibold text-gray-900">
              samuelasije@gmail.com
            </p>
          </div>

          <div className="rounded-[36px] bg-white p-5">
            <div className="space-y-5">
              <div>
                <p className="mb-3 text-sm font-medium text-gray-700">
                  Verification Code
                </p>

                <Input
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter 6-digit OTP"
                  className="h-14 rounded-[22px] border-0 bg-[#F5F5F5] text-center text-[18px] tracking-[10px]"
                />
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  Didn&apos;t receive code?
                </p>

                <button className="text-sm font-semibold text-gray-900">
                  Resend OTP
                </button>
              </div>

              <Button
                onClick={() => navigate("/dashboard")}
                className="mt-2 h-14 rounded-full bg-[#111111] hover:bg-[#111111]"
              >
                <div className="flex items-center gap-2 text-[15px] font-medium">
                  Verify OTP
                  <ArrowRight size={18} />
                </div>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-gray-400">
          BIU Smart Hostel Key Management System
        </div>
      </div>
    </div>
  );
};

export default VerifyOtpPage;
