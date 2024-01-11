"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";


import { useServerStore } from "@/store/serverStore";
import { useDialogOpen } from "@/store/otherStore";
import { ServerType } from "@/types/serverType";
import { useServerSaveMutaion } from "@/hooks/serverHooks";

export default function ServerInputDialog() {
    const {
        serverIP,
        isBedrock,
        botState,
        setServerIP,
        setIsBedrock,
        setServerPort,
        reset,
    } = useServerStore();

    const { isDialogOpen, setIsDialogOpen } = useDialogOpen();

    const mutation = useServerSaveMutaion();

    const handleSave = async () => {
        let ip = "";
        let port = "";

        if (serverIP.includes(":")) {
            [ip, port] = serverIP.split(":");
            setServerIP(ip);
            setServerPort(parseInt(port));
        } else {
            ip = serverIP;
            setServerIP(ip);
        }

        const server: ServerType = {
            serverIP: ip,
            serverPort: parseInt(port),
            isBedrock: isBedrock,
            botState: botState,
        };

        // console.log(server);

        reset();

        mutation.mutate(server);
    };

    return (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Server Details</DialogTitle>
                    <DialogDescription>
                        Enter the Server IP address and Port ( Optional ).
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="sip" className="text-right">
                            Server IP Address
                        </Label>
                        <Input
                            id="sip"
                            placeholder="super.coolserver.com:11111"
                            className="col-span-3"
                            required
                            value={serverIP}
                            onChange={(e) => setServerIP(e.target.value)}
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="isb" className="text-right">
                            Is Bedrock
                        </Label>
                        <Checkbox
                            id="isb"
                            checked={isBedrock}
                            onCheckedChange={(checked: boolean) => setIsBedrock(checked)}
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={handleSave}>
                        Save
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
