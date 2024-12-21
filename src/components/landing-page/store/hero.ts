import { create } from "zustand";

interface HeroState {
  height: number;
  setHeight: (height: number) => void;
}

export const useHeroHeightStore = create<HeroState>((set) => ({
  height: 0,
  setHeight: (height: number) => set({ height }),
}));
