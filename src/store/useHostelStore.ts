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
  type: ActivityType;
  hostel: string;
  flat: string;
  roomNumber: string;
  time: string;
  status: "AT PORTER" | "COLLECTED";
}

interface HostelStore {
  student: StudentData | null;
  isLoggedIn: boolean;
  activities: Activity[];

  registerStudent: (student: StudentData) => void;
  loginStudent: (matricNumber: string, password: string) => boolean;
  logoutStudent: () => void;
  addActivity: (type: ActivityType) => void;
}

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
      student: null,
      isLoggedIn: false,
      activities: [],

      registerStudent: (student) => {
        set({
          student,
          isLoggedIn: true,
          activities: [],
        });
      },

      loginStudent: (matricNumber, password) => {
        const student = get().student;

        if (
          student &&
          student.matricNumber === matricNumber &&
          student.password === password
        ) {
          set({ isLoggedIn: true });
          return true;
        }

        return false;
      },

      logoutStudent: () => {
        set({
          student: null,
          isLoggedIn: false,
          activities: [],
        });
      },

      addActivity: (type) => {
        const student = get().student;

        if (!student) return;

        const newActivity: Activity = {
          id: crypto.randomUUID(),
          type,
          hostel: student.hostel,
          flat: student.flat,
          roomNumber: student.roomNumber,
          time: formatTime(),
          status: type === "Dropped Key" ? "AT PORTER" : "COLLECTED",
        };

        set({
          activities: [newActivity, ...get().activities],
        });
      },
    }),
    {
      name: "biu-hostel-demo-storage",
    },
  ),
);
