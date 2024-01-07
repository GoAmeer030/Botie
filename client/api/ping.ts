import axios, { AxiosResponse } from "axios";

interface PingResponse {
    message: string;
}

const fetchPing = async (): Promise<String> => {
    const response: AxiosResponse<PingResponse> = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/ping`
    );
    return response.data.message;
};

export default fetchPing;