import { BotState } from "@/types/botType";

export type ServerState = {
    serverIP: string;
    serverPort: number;
    isBedrock: boolean;
    botState: BotState[] | null;
    setServerIP: (ip: string) => void;
    setServerPort: (port: number) => void;
    setIsBedrock: (isBedrock: boolean) => void;
    setBotState: (botState: BotState[]) => void;
    reset: () => void;
}

export type ServerType = {
    serverIP: string;
    serverPort: number;
    isBedrock: boolean;
    botState: BotState[] | null;
}

export type ServerResponseType = {
    online: boolean;
    host: string;
    port: number;
    ip_address: string | null;
    eula_blocked: boolean;
    retrieved_at: number;
    expires_at: number;
    version: {
        name_raw: string;
        name_clean: string;
        name_html: string;
        protocol: number;
    } | null;
    players: {
        online: number;
        max: number;
        list: {
            uuid: string;
            name_raw: string;
            name_clean: string;
            name_html: string;
        }[];
    } | null;
    motd: {
        raw: string;
        clean: string;
        html: string;
    } | null;
    icon: string | null;
    mods: {
        name: string;
        version: string;
    }[];
    software: string | null;
    plugins: {
        name: string;
        version: string | null;
    }[];
    srv_record: {
        host: string;
        port: number;
    } | null;
};