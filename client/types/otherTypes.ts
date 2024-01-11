export type ServerCountState = {
    serverCount: number;
    previousServerCount: number;
    setServerCount: (count: number) => void;
    setPreviousServerCount: (count: number) => void;
};

export type DialogOpenState = {
    isDialogOpen: boolean;
    setIsDialogOpen: (isOpen: boolean) => void;
}