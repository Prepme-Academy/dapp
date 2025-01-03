import { UserInfo } from "@/types";
import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

interface StoreState {
  isFirstVisit: boolean;
  initializingState: boolean;
  userInfo: UserInfo | null;
}

interface StoreActions {
  setFirstVisit: (value: boolean) => void;
  setinitializingState: (value: boolean) => void;
  setUserInfo: (info: UserInfo) => void;
  resetState: () => void;
}

type UseStore = StoreState & StoreActions;

const useClientStore = create<UseStore>()(
  persist<UseStore>(
    (set) => ({
      isFirstVisit: false,
      initializingState: false,
      userInfo: null,
      setinitializingState: (value) => set({ initializingState: value }),
      setFirstVisit: (value) => set({ isFirstVisit: value }),
      setUserInfo: (info) => set({ userInfo: info }),
      resetState: () => set(() => ({ userInfo: null })),
    }),
    {
      name: "prepme-academy-client-store",
      onRehydrateStorage: () => (state) => {
        console.log("Rehydrated State:", state);
      },
    } as PersistOptions<UseStore>
  )
);

export default useClientStore;
