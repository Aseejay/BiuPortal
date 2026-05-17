// src/pages/CreateAccountPage.tsx

import { useEffect, useState } from "react";

import {
  ArrowLeft,
  ArrowRight,
  BedDouble,
  Building2,
  ChevronDown,
  DoorOpen,
  LockKeyhole,
  User2,
} from "lucide-react";

import { Link, useLocation, useNavigate } from "react-router-dom";

import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

const hostels = [
  "Hope Hostel",
  "Above Only Hostel",
  "Peace Hostel",
  "Balm of Gilead",
  "Grace Hostel",
];

const CreateAccountPage = () => {
  const [step, setStep] = useState(1);

  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname, step]);

  const student = {
    fullName: "Samuel Asije",
  };

  return (
    <div className="flex min-h-screen bg-[#F5F5F5] px-5 py-6">
      <div className="mx-auto flex w-full max-w-md flex-col justify-between">
        <div>
          {step === 1 && (
            <>
              <button className="mb-10 flex h-12 w-12 items-center justify-center rounded-full bg-white">
                <ArrowLeft size={20} className="text-gray-700" />
              </button>

              <div className="mb-12">
                <p className="text-sm font-medium text-gray-400">
                  Let&apos;s begin
                </p>

                <h1 className="mt-2 text-[38px] font-semibold leading-none tracking-tight text-gray-900">
                  Create account
                </h1>
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

                  <Button
                    onClick={() => setStep(2)}
                    className="h-14 rounded-full bg-[#111111] hover:bg-[#111111]"
                  >
                    <div className="flex items-center gap-2 text-[15px] font-medium">
                      Continue
                      <ArrowRight size={18} />
                    </div>
                  </Button>
                </div>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <button
                onClick={() => setStep(1)}
                className="mb-10 flex h-12 w-12 items-center justify-center rounded-full bg-white"
              >
                <ArrowLeft size={20} className="text-gray-700" />
              </button>

              <div className="mb-12">
                <p className="text-sm font-medium text-gray-400">
                  Complete setup
                </p>

                <h1 className="mt-2 text-[38px] font-semibold leading-none tracking-tight text-gray-900">
                  Your details
                </h1>
              </div>

              <div className="rounded-[36px] bg-white p-5">
                <div className="space-y-5">
                  <div>
                    <p className="mb-3 text-sm font-medium text-gray-700">
                      Full Name
                    </p>

                    <div className="relative">
                      <User2
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <Input
                        value={student.fullName}
                        readOnly
                        className="h-14 rounded-[22px] border-0 bg-[#F5F5F5] pl-12 text-[15px]"
                      />
                    </div>
                  </div>

                  <div>
                    <p className="mb-3 text-sm font-medium text-gray-700">
                      Hostel
                    </p>

                    <div className="relative">
                      <Building2
                        size={18}
                        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-gray-400"
                      />

                      <ChevronDown
                        size={18}
                        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 text-gray-400"
                      />

                      <select className="h-14 w-full appearance-none rounded-[22px] border-0 bg-[#F5F5F5] px-12 text-[15px] text-gray-700 outline-none">
                        <option>Select hostel</option>

                        {hostels.map((hostel) => (
                          <option key={hostel} value={hostel}>
                            {hostel}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <p className="mb-3 text-sm font-medium text-gray-700">
                      Room Number
                    </p>

                    <div className="relative">
                      <BedDouble
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <Input
                        placeholder="Enter room number"
                        className="h-14 rounded-[22px] border-0 bg-[#F5F5F5] pl-12 text-[15px]"
                      />
                    </div>
                  </div>

                  <div>
                    <p className="mb-3 text-sm font-medium text-gray-700">
                      Door Number
                    </p>

                    <div className="relative">
                      <DoorOpen
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <Input
                        placeholder="Enter door number"
                        className="h-14 rounded-[22px] border-0 bg-[#F5F5F5] pl-12 text-[15px]"
                      />
                    </div>
                  </div>

                  <div>
                    <p className="mb-3 text-sm font-medium text-gray-700">
                      Create Password
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

                  <div>
                    <p className="mb-3 text-sm font-medium text-gray-700">
                      Confirm Password
                    </p>

                    <div className="relative">
                      <LockKeyhole
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <Input
                        type="password"
                        placeholder="Confirm password"
                        className="h-14 rounded-[22px] border-0 bg-[#F5F5F5] pl-12 text-[15px]"
                      />
                    </div>
                  </div>

                  <Button
                    onClick={() => navigate("/dashboard")}
                    className="h-14 rounded-full bg-[#111111] hover:bg-[#111111]"
                  >
                    <div className="flex items-center gap-2 text-[15px] font-medium">
                      Create Account
                      <ArrowRight size={18} />
                    </div>
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link to="/" className="font-semibold text-gray-900">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountPage;
