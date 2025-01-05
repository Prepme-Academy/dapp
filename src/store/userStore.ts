// src/store/userStore.ts

import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

// Define the user state
interface UserState {
  username: string;
  examType: string;
  dailyDuration: number;
  notificationEnabled: boolean;
  setUser: (user: Partial<UserState>) => void;
}

// Define the client state
interface ClientState {
  resetState: () => void;
}

// Combine both states
type StoreState = UserState & ClientState;

// Create the store with persist middleware
const useUserStore = create<StoreState>()(
  persist<StoreState>(
    (set) => ({
      username: "",
      examType: "",
      dailyDuration: 0,
      notificationEnabled: false,
      setUser: (user) => set((state) => ({ ...state, ...user })),
      resetState: () =>
        set(() => ({
          email: "",
          walletAddress: "",
          authId: "",
          username: "",
          examType: "",
          dailyDuration: 0,
          notificationEnabled: false,
        })),
    }),
    {
      name: "prepme-academy-user-store",
      onRehydrateStorage: () => () => {
        // console.log("Rehydrated State:", state);
      },
    } as PersistOptions<StoreState>
  )
);

export default useUserStore;
