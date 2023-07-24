import { create } from "zustand";

interface DrawerState {
  open: boolean;
  toggleOpen: () => void;
}

export const useChatOpenStore = create<DrawerState>()((set) => ({
  open: false,
  toggleOpen: () => set(({ open }) => ({ open: !open })),
}));
