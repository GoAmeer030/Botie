"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

import { useEffect } from "react";

import { useServerCount } from "@/store/otherStore";
import {
    useGetServersQuery,
    useGetServerDetailsQuery,
} from "@/hooks/serverHooks";

export default function ServerCard() {
    const {
        serverCount,
        previousServerCount,
        setServerCount,
        setPreviousServerCount,
    } = useServerCount();

    const { data, refetch } = useGetServersQuery();

    useEffect(() => {
        setServerCount(data?.length || 0);
        setPreviousServerCount(serverCount);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, serverCount]);

    const results = useGetServerDetailsQuery(data || []);

    useEffect(() => {
        if (serverCount !== previousServerCount) {
            refetch();
        }
    }, [serverCount, previousServerCount, refetch]);

    return (
        <div className="flex flex-wrap justify-start p-4 pt-24">
            {results.map((result, index) => (
                <div
                    key={index}
                    className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-4"
                >
                    <Card className="flex flex-col items-start justify-center m-1 w-50 min-h-max">
                        <CardHeader className="w-full text-center">
                            <CardTitle>{result.data?.host}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center justify-center">
                            <Image
                                src={
                                    result.data?.icon ||
                                    "/Minecraft_franchise_logo.svg"
                                }
                                alt="Server"
                                width={96}
                                height={96}
                            />
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: result.data?.motd?.html || "",
                                }}
                                className="text-center"
                            />
                            <div
                                dangerouslySetInnerHTML={{
                                    __html:
                                        result.data?.version?.name_html || "",
                                }}
                                className="text-center"
                            />
                        </CardContent>
                    </Card>
                </div>
            ))}
        </div>
    );
}
