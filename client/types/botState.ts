export type BotState = {
    botName: string;
    botPassword: string;

    setBotName: (name: string) => void;
    setBotPassword: (password: string) => void;
}