// src/store/useHostelStore.ts

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ActivityType = "Dropped Key" | "Collected Key";

export interface StudentData {
  matricNumber: string;
  fullName: string;
  hostel: string;
  flat: string;
  roomNumber: string;
  password: string;
}

export interface Activity {
  id: string;
  matricNumber: string;
  fullName: string;
  type: ActivityType;
  hostel: string;
  flat: string;
  roomNumber: string;
  time: string;
  status: "AT PORTER" | "COLLECTED";
}

interface ActionResult {
  success: boolean;
  message: string;
}

interface HostelStore {
  students: StudentData[];
  student: StudentData | null;
  currentStudentMatric: string | null;
  isLoggedIn: boolean;
  activities: Activity[];

  registerStudent: (student: StudentData) => ActionResult;
  loginStudent: (matricNumber: string, password: string) => ActionResult;
  logoutStudent: () => void;

  addActivity: (type: ActivityType) => ActionResult;
  scanKeyQrCode: () => ActionResult;

  getCurrentStudentActivities: () => Activity[];
  getSameRoomActivities: () => Activity[];
  getNextKeyAction: () => ActivityType;
  clearDemoData: () => void;
}

const normalize = (value: string) => value.trim().toLowerCase();

const formatTime = () => {
  return new Date().toLocaleString("en-NG", {
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    day: "numeric",
    month: "short",
  });
};

export const useHostelStore = create<HostelStore>()(
  persist(
    (set, get) => ({
      students: [],
      student: null,
      currentStudentMatric: null,
      isLoggedIn: false,
      activities: [],

      registerStudent: (newStudent) => {
        const cleanStudent: StudentData = {
          matricNumber: newStudent.matricNumber.trim(),
          fullName: newStudent.fullName.trim(),
          hostel: newStudent.hostel.trim(),
          flat: newStudent.flat.trim(),
          roomNumber: newStudent.roomNumber.trim(),
          password: newStudent.password,
        };

        const students = get().students || [];

        const matricAlreadyExists = students.some(
          (student) =>
            normalize(student.matricNumber) ===
            normalize(cleanStudent.matricNumber),
        );

        if (matricAlreadyExists) {
          return {
            success: false,
            message: "This matric number has already been registered",
          };
        }

        set({
          students: [...students, cleanStudent],
          student: cleanStudent,
          currentStudentMatric: cleanStudent.matricNumber,
          isLoggedIn: true,
        });

        return {
          success: true,
          message: "Account created successfully",
        };
      },

      loginStudent: (matricNumber, password) => {
        const students = get().students || [];

        const foundStudent = students.find(
          (student) =>
            normalize(student.matricNumber) === normalize(matricNumber) &&
            student.password === password,
        );

        if (!foundStudent) {
          return {
            success: false,
            message: "Invalid matric number or password",
          };
        }

        set({
          student: foundStudent,
          currentStudentMatric: foundStudent.matricNumber,
          isLoggedIn: true,
        });

        return {
          success: true,
          message: "Login successful",
        };
      },

      logoutStudent: () => {
        set({
          student: null,
          currentStudentMatric: null,
          isLoggedIn: false,
        });
      },

      addActivity: (type) => {
        const currentStudent = get().student;

        if (!currentStudent) {
          return {
            success: false,
            message: "Please login first",
          };
        }

        const newActivity: Activity = {
          id: crypto.randomUUID(),
          matricNumber: currentStudent.matricNumber,
          fullName: currentStudent.fullName,
          type,
          hostel: currentStudent.hostel,
          flat: currentStudent.flat,
          roomNumber: currentStudent.roomNumber,
          time: formatTime(),
          status: type === "Dropped Key" ? "AT PORTER" : "COLLECTED",
        };

        set({
          activities: [newActivity, ...(get().activities || [])],
        });

        return {
          success: true,
          message:
            type === "Dropped Key"
              ? "Key dropped successfully"
              : "Key collected successfully",
        };
      },

      getCurrentStudentActivities: () => {
        const currentStudent = get().student;

        if (!currentStudent) {
          return [];
        }

        return (get().activities || []).filter(
          (activity) =>
            normalize(activity.matricNumber) ===
            normalize(currentStudent.matricNumber),
        );
      },

      getSameRoomActivities: () => {
        const currentStudent = get().student;

        if (!currentStudent) {
          return [];
        }

        return (get().activities || []).filter(
          (activity) =>
            normalize(activity.hostel) === normalize(currentStudent.hostel) &&
            normalize(activity.flat) === normalize(currentStudent.flat) &&
            normalize(activity.roomNumber) ===
              normalize(currentStudent.roomNumber),
        );
      },

      getNextKeyAction: () => {
        const currentStudent = get().student;

        if (!currentStudent) {
          return "Dropped Key";
        }

        const currentStudentActivities = (get().activities || []).filter(
          (activity) =>
            normalize(activity.matricNumber) ===
            normalize(currentStudent.matricNumber),
        );

        const lastActivity = currentStudentActivities[0];

        if (!lastActivity) {
          return "Dropped Key";
        }

        if (lastActivity.type === "Dropped Key") {
          return "Collected Key";
        }

        return "Dropped Key";
      },

      scanKeyQrCode: () => {
        const nextAction = get().getNextKeyAction();

        return get().addActivity(nextAction);
      },

      clearDemoData: () => {
        set({
          students: [],
          student: null,
          currentStudentMatric: null,
          isLoggedIn: false,
          activities: [],
        });
      },
    }),
    {
      name: "biu-hostel-demo-storage",
    },
  ),
);
