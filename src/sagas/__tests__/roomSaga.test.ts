import { runSaga, Saga } from "redux-saga";
import { fetchRooms } from "../roomSaga";
import * as api from "../../api/roomApi";
import { Room } from "../../domain/Room";

test("should fetch rooms and dispatch success action", async () => {
    const rooms: Room[] = [{ id: 1, name: "Title" }];
    const getRooms: any = jest.spyOn(api, "getRooms")
        .mockImplementation(() => Promise.resolve(rooms));
    const dispatched: any[] = [];

    await runSaga<unknown, unknown, Saga<Room[]>>({
        dispatch: (action) => dispatched.push(action)
    }, fetchRooms);

    const successAction = {
        type: "FETCH_ROOMS_SUCCESS",
        payload: rooms
    };

    expect(getRooms).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([successAction]);
    getRooms.mockClear();
});

test("should fetch rooms and dispatch fail action", async () => {
    const getRooms: any = jest.spyOn(api, "getRooms")
        .mockImplementation(() => Promise.reject());
    const dispatched: any[] = [];

    await runSaga({
        dispatch: (action) => dispatched.push(action)
    }, fetchRooms);

    const failAction = {
        type: "FETCH_ROOMS_FAIL"
    };

    expect(getRooms).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([failAction]);
    getRooms.mockClear();
});