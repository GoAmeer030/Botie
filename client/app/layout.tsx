import "@/styles/global.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Providers from "@/app/providers";
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
        <html lang="en" suppressHydrationWarning={true}>
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    fontSans.variable
                )}
            >
                <Providers
                    themeProps={{
                        attribute: "class",
                        defaultTheme: "dark",
                    }}
                >
                    <Navbar />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
