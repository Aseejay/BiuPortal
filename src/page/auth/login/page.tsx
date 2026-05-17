// src/pages/LoginPage.tsx

import { ArrowRight, LockKeyhole, User2 } from "lucide-react";

import { Link, useLocation, useNavigate } from "react-router-dom";

import { useEffect } from "react";

import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

const LoginPage = () => {
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen bg-[#F5F5F5] px-5 py-6">
      <div className="mx-auto flex w-full max-w-md flex-col justify-between">
        <div>
          <div className="mb-10 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">Welcome back</p>

              <h1 className="mt-2 text-[38px] font-semibold leading-none tracking-tight text-gray-900">
                Login
              </h1>
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
              <User2 size={24} className="text-gray-700" />
            </div>
          </div>

          <div className="mb-5 rounded-[24px] border border-[#E5E7EB] bg-white p-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  New Student?
                </p>

                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Create an account to start using the hostel key management
                  system.
                </p>
              </div>

              <Link
                to="/create-account"
                className="whitespace-nowrap rounded-full bg-[#111111] px-4 py-3 text-xs font-semibold text-white"
              >
                Create Account
              </Link>
            </div>
          </div>

          <div className="rounded-[36px] bg-white p-5">
            <div className="space-y-5">
              <div>
                <p className="mb-3 text-sm font-medium text-gray-700">
                  Matric Number
                </p>

                <div className="relative">
                  <User2
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <Input
                    placeholder="Enter matric number"
                    className="h-14 rounded-[22px] border-0 bg-[#F5F5F5] pl-12 text-[15px]"
                  />
                </div>
              </div>

              <div>
                <p className="mb-3 text-sm font-medium text-gray-700">
                  Password
                </p>

                <div className="relative">
                  <LockKeyhole
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <Input
                    type="password"
                    placeholder="Enter password"
                    className="h-14 rounded-[22px] border-0 bg-[#F5F5F5] pl-12 text-[15px]"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 text-sm text-gray-500">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300"
                  />
                  Remember me
                </label>

                <button className="text-sm font-medium text-gray-700">
                  Forgot password?
                </button>
              </div>

              <Button
                onClick={() => navigate("/dashboard")}
                className="mt-2 h-14 rounded-full bg-[#111111] hover:bg-[#111111]"
              >
                <div className="flex items-center gap-2 text-[15px] font-medium">
                  Login
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

export default LoginPage;
