import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

interface StoreState {
  isFirstVisit: boolean;
}

interface StoreActions {
  setFirstVisit: (value: boolean) => void;
  resetState: () => void;
}

type UseStore = StoreState & StoreActions;

const useClientStore = create<UseStore>()(
  persist<UseStore>(
    (set) => ({
      isFirstVisit: true,
      setFirstVisit: (value) => set({ isFirstVisit: value }),
      resetState: () => set(() => ({ isFirstVisit: false })),
    }),
    {
      name: "client-store",
    } as PersistOptions<UseStore>
  )
);

export default useClientStore;
