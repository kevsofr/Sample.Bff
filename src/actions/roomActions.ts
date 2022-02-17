import { Room } from "../domain/Room";

type FetchRooms = {
    type: "FETCH_ROOMS";
};

type FetchRoomsSuccess = {
    type: "FETCH_ROOMS_SUCCESS";
    payload: Room[];
};

type FetchRoomsFail = {
    type: "FETCH_ROOMS_FAIL";
};

export const fetchRooms = (): FetchRooms => ({
    type: "FETCH_ROOMS"
});

export type RoomAction =
    FetchRooms
    | FetchRoomsSuccess
    | FetchRoomsFail;