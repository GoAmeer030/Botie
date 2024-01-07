import { BotState } from "@/types/botState";

export type ServerState = {
    serverName: string;
    serverIP: string;
    serverPort: number;
    botState: BotState[];

    setServerName: (name: string) => void;
    setServerIP: (ip: string) => void;
    setServerPort: (port: number) => void;
    setBotState: (botState: BotState[]) => void;
}