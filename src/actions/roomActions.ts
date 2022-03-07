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

export type FetchRoom = {
    type: "FETCH_ROOM";
    payload: number;
};

type FetchRoomSuccess = {
    type: "FETCH_ROOM_SUCCESS";
    payload: Room;
};

type FetchRoomFail = {
    type: "FETCH_ROOM_FAIL";
};

type OpenRoomEditor = {
    type: "OPEN_ROOM_EDITOR";
};

export type CreateRoom = {
    type: "CREATE_ROOM";
    payload: Room;
};

type CreateRoomSuccess = {
    type: "CREATE_ROOM_SUCCESS";
};

type CreateRoomFail = {
    type: "CREATE_ROOM_FAIL";
};

export type UpdateRoom = {
    type: "UPDATE_ROOM";
    payload: Room;
};

type UpdateRoomSuccess = {
    type: "UPDATE_ROOM_SUCCESS";
};

type UpdateRoomFail = {
    type: "UPDATE_ROOM_FAIL";
};

export type RoomAction =
    FetchRooms
    | FetchRoomsSuccess
    | FetchRoomsFail
    | FetchRoom
    | FetchRoomSuccess
    | FetchRoomFail
    | OpenRoomEditor
    | CreateRoom
    | CreateRoomSuccess
    | CreateRoomFail
    | UpdateRoom
    | UpdateRoomSuccess
    | UpdateRoomFail;