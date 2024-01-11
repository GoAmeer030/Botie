export type BotState = {
    botName: string;
    botPassword: string;
}

export type ServerState = {
    serverIP: string;
    serverPort: number;
    isBedrock: boolean;
    botState: BotState[];
}