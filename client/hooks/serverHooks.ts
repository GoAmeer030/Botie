import {
    useMutation,
    useQuery,
    useQueries,
    UseQueryResult,
} from "@tanstack/react-query";

import { getServers, getServerDetails, postSaveServer } from "@/api/server";
import { useDialogOpen, useServerCount } from "@/store/otherStore";
import { ServerType } from "@/types/serverType";

export function useServerSaveMutaion() {
    const { serverCount, setServerCount, setPreviousServerCount } =
        useServerCount();

    const { isDialogOpen, setIsDialogOpen } = useDialogOpen();

    const mutation = useMutation({
        mutationFn: postSaveServer,
        onSuccess: () => {
            setIsDialogOpen(false);
            setPreviousServerCount(serverCount);
            setServerCount(serverCount + 1);
        },
        onError: (error) => {
            console.log(error);
        },
    });

    return mutation;
}

export function useGetServersQuery() {
    const {
        isError,
        error,
        isLoading,
        data,
        refetch,
    }: UseQueryResult<ServerType[], Error> = useQuery({
        queryKey: ["servers"],
        queryFn: getServers,
        retry: false,
    });

    if (isLoading) {
        console.log("Loading...");
    }

    if (isError) {
        if (error.message === "400") {
            console.log("No servers found add one first");
        } else {
            console.log(error);
        }
    }

    return {data: data, refetch: refetch};
}

export function useGetServerDetailsQuery(data: ServerType[]) {
    const results = useQueries({
        queries:
            data?.map((server) => {
                return {
                    queryKey: ["server", server],
                    queryFn: getServerDetails,
                };
            }) || [],
    });

    return results;
}