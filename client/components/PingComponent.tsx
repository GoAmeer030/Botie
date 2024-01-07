"use client";

import {
    QueryClient,
    QueryClientProvider,
    useQuery,
    UseQueryResult,
} from "@tanstack/react-query";
import fetchPing from "@/api/ping";

function UsePing() {
    const query: UseQueryResult<string, Error> = useQuery({
        queryKey: ["ping"],
        queryFn: fetchPing,
    });

    if (query.isLoading) {
        console.info("Loading...");
        return;
    }

    if (query.isError) {
        console.error(query.error);
        return;
    }

    return <p>{query.data}</p>;
}

export default function PingComponent() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <h1 className="text-xl font-bold">Ping</h1>
            <UsePing />
        </QueryClientProvider>
    );
}
