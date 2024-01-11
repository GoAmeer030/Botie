import axios, { AxiosResponse } from "axios";
import { ServerType, ServerResponseType } from "@/types/serverType";

const getServerDetails = async (queryKey: any): Promise<ServerResponseType> => {
    const [_, server] = queryKey.queryKey;
    if (server.isBedrock) {
        const response = await axios.get(
            `https://api.mcstatus.io/v2/status/bedrock/${server.serverIP}`
        )
        // console.log(response.data);
        return response.data;
    }

    let response = await axios.get(
        `https://api.mcstatus.io/v2/status/java/${server.serverIP}`
    )
    // console.log(response.data);
    return response.data;
}

const getServers = async (): Promise<AxiosResponse> => {
    const response = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/getServers`
    )
    // console.log(response.data);
    return response.data;
}

const postSaveServer = async (server: ServerType): Promise<AxiosResponse> => {
    const response: AxiosResponse = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/addServer`,
        server
    )
    return response;
}

export {
    postSaveServer,
    getServers,
    getServerDetails
}