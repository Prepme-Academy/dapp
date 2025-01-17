import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

interface StoreState {
  isFirstVisit: boolean;
  initializingState: boolean;
}

interface StoreActions {
  setFirstVisit: (value: boolean) => void;
  setinitializingState: (value: boolean) => void;
  resetState: () => void;
}

type UseStore = StoreState & StoreActions;

const useClientStore = create<UseStore>()(
  persist<UseStore>(
    (set) => ({
      isFirstVisit: false,
      initializingState: false,
      setinitializingState: (value) => set({ initializingState: value }),
      setFirstVisit: (value) => set({ isFirstVisit: value }),
      resetState: () => set(() => ({})),
    }),
    {
      name: "prepme-academy-client-store",
      onRehydrateStorage: () => () => {
        // console.log("Rehydrated State:", state);
      },
    } as PersistOptions<UseStore>
  )
);

export default useClientStore;
