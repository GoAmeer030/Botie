import { create } from "zustand";
import { BotState } from "@/types/botState";

export const useBotStore = create<BotState>((set) => ({
    botName: "",
    botPassword: "",

    setBotName: (name: string) => set({ botName: name }),
    setBotPassword: (password: string) => set({ botPassword: password }),
}));