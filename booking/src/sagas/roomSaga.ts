import { fetchRooms } from "../api/roomApi";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { Room } from "../domain/Room";

export function* getRooms() {
    try {
        const rooms: Room[] = yield call(fetchRooms);
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

export default function* () {
    yield all([
        takeLatest("FETCH_ROOMS", getRooms)
    ]);
}