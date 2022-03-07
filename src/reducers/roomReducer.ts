import { RoomAction } from "../actions/roomActions";
import { Reducer } from "redux";
import RoomState from "../states/RoomState";

const initialState: RoomState = {
    rooms: [],
    currentRoom: undefined,
    isOpen: false,
    isLoading: false
};

export const roomReducer: Reducer<RoomState, RoomAction> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "FETCH_ROOMS_SUCCESS":
            return {
                ...state,
                rooms: action.payload
            };
        case "FETCH_ROOM":
            return {
                ...state,
                currentRoom: {
                    id: action.payload,
                    name: ""
                },
                isLoading: true
            };
        case "FETCH_ROOM_SUCCESS":
            return {
                ...state,
                currentRoom: action.payload,
                isOpen: true,
                isLoading: false
            };
        case "OPEN_ROOM_EDITOR":
            return {
                ...state,
                currentRoom: undefined,
                isOpen: true
            };
        case "CREATE_ROOM":
        case "UPDATE_ROOM":
            return {
                ...state,
                currentRoom: action.payload,
                isLoading: true
            };
        case "CREATE_ROOM_SUCCESS":
        case "UPDATE_ROOM_SUCCESS":
            return {
                ...state,
                isOpen: false,
                isLoading: false
            };
        default:
            return state;
    }
};
