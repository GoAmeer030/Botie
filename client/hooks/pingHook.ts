import {
    useQuery,
    UseQueryResult,
} from "@tanstack/react-query";
import fetchPing from "@/api/ping";

export function usePing() {
    const { isLoading, isError, error, data }: UseQueryResult<string, Error> = useQuery({
        queryKey: ["ping"],
        queryFn: fetchPing,
    });

    if (isLoading) { console.log("Loading..."); return; };
    if (isError) { console.log(error); return; };

    return data;
}