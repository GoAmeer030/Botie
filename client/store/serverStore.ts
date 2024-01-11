import { create } from "zustand";
import { ServerState } from "@/types/serverType";
import { BotState } from "@/types/botType";

export const useServerStore = create<ServerState>((set) => ({
    serverIP: "",
    serverPort: 0,
    isBedrock: false,
    botState: [],

    setServerIP: (ip: string): void => set({ serverIP: ip }),
    setServerPort: (port: number): void => set({ serverPort: port }),
    setIsBedrock: (isBedrock: boolean): void => set({ isBedrock: isBedrock }),
    setBotState: (botState: BotState[]): void => set({ botState: botState }),

    reset: (): void => set({ serverIP: "", serverPort: 0, botState: [], isBedrock: false })
}));