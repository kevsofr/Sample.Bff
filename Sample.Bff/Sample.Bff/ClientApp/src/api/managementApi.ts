import client from ".";
import User from "../models/User";

export const getUser = async (): Promise<User> => {
    const response = await client.get("/bff/user");
    return {
        name: response.data[5].value,
        logoutUrl: response.data[8].value,
    };
}

export const log = async (error: any): Promise<void> =>
    await client.post("/log", {
        logLevel: 4,
        message: error.toString()
    });