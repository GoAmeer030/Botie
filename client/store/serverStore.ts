import { create } from "zustand";
import { ServerState } from "@/types/serverState";

export const useServerStore = create<ServerState>((set) => ({
    serverName: "",
    serverIP: "",
    serverPort: 0,
    botState: [],

    setServerName: (name: string) => set({ serverName: name }),
    setServerIP: (ip: string) => set({ serverIP: ip }),
    setServerPort: (port: number) => set({ serverPort: port }),
    setBotState: (botState: any[]) => set({ botState: botState }),
}));