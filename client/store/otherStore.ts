import { create, createStore } from "zustand";
import { ServerCountState, DialogOpenState } from "@/types/otherTypes";

export const useServerCount = create<ServerCountState>((set) => ({
    serverCount: 0,
    previousServerCount: 0,

    setServerCount: (count: number) => set({ serverCount: count }),
    setPreviousServerCount: (count: number) => set({ previousServerCount: count }),
}));

export const useDialogOpen = create<DialogOpenState>((set) => ({
    isDialogOpen: false,

    setIsDialogOpen: (isOpen: boolean) => set({ isDialogOpen: isOpen }),
}));