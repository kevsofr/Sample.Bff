import client from "../api";
import { Room } from "../domain/Room";

export const fetchRooms = async (): Promise<Room[]> => {
    const response = await client.get("/Rooms");
    return response.data.rooms.map((r: any) => ({
        id: r.id,
        name: r.name
    }));
};
