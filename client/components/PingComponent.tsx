"use client";

import { usePing } from "@/hooks/pingHook";

export default function PingComponent() {
    return (
        <>
            <h1 className="text-xl font-bold">Ping</h1>
            <p>{usePing()}</p>
        </>
    );
}
