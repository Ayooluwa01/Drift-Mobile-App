import { create } from "zustand";
interface cats {
  activecategories: string;
  setactivecategories: (items: any) => void;
}
export const activecategories = create<cats>((set) => ({
  activecategories: "",
  setactivecategories: (items: any) => set({ activecategories: items }),
}));
