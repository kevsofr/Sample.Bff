import client from "../api";
import { Room } from "../domain/Room";
import { CreateRoomRequest } from "./dto/CreateRoomRequest";
import { UpdateRoomRequest } from "./dto/UpdateRoomRequest";

export const getRooms = async (): Promise<Room[]> => {
    const response = await client.get("/Rooms");
    return response.data.rooms.map((r: any) => ({
        id: r.id,
        name: r.name
    }));
};

export const getRoom = async (id: number): Promise<Room> => {
    const response = await client.get(`/Rooms/${id}`);
    return {
        id: response.data.room.id,
        name: response.data.room.name
    };
};

export const postRoom = async (room: Room): Promise<void> => {
    const request: CreateRoomRequest = {
        name: room.name
    };
    await client.post("/Rooms", request);
};

export const putRoom = async (room: Room): Promise<void> => {
    const request: UpdateRoomRequest = {
        id: room.id,
        name: room.name
    };
    await client.put(`/Rooms/${room.id}`, request);
};