import { MovieEnums } from "@/constants/movieEnums";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface User {
  email: string;
  password: string;
 fullName: string;
  acceptanceMessage: boolean | undefined;
}

interface AuthState {
  registeredUsers: User[];
  currentUser: User | null;
  isAuthenticated: boolean;
  error: string | null;
  isRegistered: boolean;

  registerUser: (userData: User) => void;

  login: (credentials: { email: string; password: string }) => void;
  logout: () => void;
  clearError: () => void;
  resetRegister: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      registeredUsers: [],
      currentUser: null,
      isAuthenticated: false,
      error: null,
      isRegistered: false,

      registerUser: (userData) => {
        const { registeredUsers } = get();

        const exists = registeredUsers.find(
          (u) => u.email === userData.email
        );

        if (exists) {
          set({
            error: "User already exists!!",
            isRegistered: false,
          });
          return;
        }

        set({
          registeredUsers: [...registeredUsers, userData], // ✅ now valid
          isRegistered: true,
          error: null,
        });
      },

  login: (credentials) => {
  const { registeredUsers } = get();

  const userMatch = registeredUsers.find(
    (u) =>
      u.email === credentials.email &&
      u.password === credentials.password
  );

  if (userMatch) {
    set({
      currentUser: userMatch,
      isAuthenticated: true,
      error: null,
    });

    return true; // ✅
  } else {
    set({
      isAuthenticated: false,
      error: "Invalid credentials. Please register first.",
    });

    return false; // ✅
  }
},

      logout: () => {
        set({
          currentUser: null,
          isAuthenticated: false,
        });
        
      },

      clearError: () => set({ error: null }),

     resetRegister: () => set({ isRegistered: false }),
    }),
    {
      name: MovieEnums.AUTH_USER,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        registeredUsers: state.registeredUsers,
        currentUser: state.currentUser,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);