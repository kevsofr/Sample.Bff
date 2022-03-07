import { getRoom, getRooms, postRoom, putRoom } from "../api/roomApi";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { Room } from "../domain/Room";
import { CreateRoom, FetchRoom, UpdateRoom } from "../actions/roomActions"

export function* fetchRooms() {
    try {
        const rooms: Room[] = yield call(getRooms);
        yield put({
            type: "FETCH_ROOMS_SUCCESS",
            payload: rooms
        });
    } catch (e) {
        yield put({
            type: "FETCH_ROOMS_FAIL"
        });
    }
}

export function* fetchRoom(action: FetchRoom) {
    try {
        const room: Room = yield call(getRoom, action.payload);
        yield put({
            type: "FETCH_ROOM_SUCCESS",
            payload: room
        });
    } catch (e) {
        yield put({
            type: "FETCH_ROOM_FAIL"
        });
    }
}

export function* createRoom(action: CreateRoom) {
    try {
        yield call(postRoom, action.payload);
        yield put({
            type: "CREATE_ROOM_SUCCESS"
        });
    } catch (e) {
        yield put({
            type: "CREATE_ROOM_FAIL"
        });
    }
}

export function* updateRoom(action: UpdateRoom) {
    try {
        yield call(putRoom, action.payload);
        yield put({
            type: "UPDATE_ROOM_SUCCESS"
        });
    } catch (e) {
        yield put({
            type: "UPDATE_ROOM_FAIL"
        });
    }
}

export default function* () {
    yield all([
        takeLatest("FETCH_ROOMS", fetchRooms),
        takeLatest("FETCH_ROOM", fetchRoom),
        takeLatest("CREATE_ROOM", createRoom),
        takeLatest("UPDATE_ROOM", updateRoom)
    ]);
}