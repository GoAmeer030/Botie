"use client";

import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <p className="text-4xl font-bold">Botie</p>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}
