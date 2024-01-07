"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useServerStore } from "@/store/serverStore";

export default function ServerInputDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>+</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Server Details</DialogTitle>
                    <DialogDescription>
                        Enter the Server Name, IP address and Port ( Optional ).
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="sname" className="text-right">
                            Server Name
                        </Label>
                        <Input
                            id="sname"
                            placeholder="Super Cool Server"
                            className="col-span-3"
                            required
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="sip" className="text-right">
                            Server IP Address
                        </Label>
                        <Input
                            id="sip"
                            placeholder="super.coolserver.com"
                            className="col-span-3"
                            required
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="sport" className="text-right">
                            Server Port Number ( Optional )
                        </Label>
                        <Input
                            id="sport"
                            placeholder="10101"
                            className="col-span-3"
                            type="number"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Save</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
