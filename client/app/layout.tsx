import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

import Navbar from "@/components/Navbar";

export const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    fontSans.variable
                )}
            >
                <div className="flex justify-center bg-[rgba(255,255,255,0.1)] backdrop-blur-md">
                    <Navbar />
                </div>
                {children}
            </body>
        </html>
    );
}
