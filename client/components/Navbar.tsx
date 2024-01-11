"use client";

import { NavigationMenu } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

import { useDialogOpen } from "@/store/otherStore";

export default function Navbar() {
    const { setIsDialogOpen } = useDialogOpen();
    return (
        <nav className="fixed top-0 mt-5 left-1/2 transform -translate-x-1/2 w-11/12 flex justify-between items-center bg-card py-2 px-6 rounded-lg shadow-md">
            <p className="text-2xl font-bold">MCBS</p>
            <NavigationMenu>
                <Button onClick={() => setIsDialogOpen(true)}>
                    <p className="text-2xl font-bold mb-2">+</p>
                </Button>
            </NavigationMenu>
        </nav>
    );
}
