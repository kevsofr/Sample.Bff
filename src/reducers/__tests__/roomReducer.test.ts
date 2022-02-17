import { roomReducer } from "../roomReducer";

test("should handle FETCH_ROOMS", () => {
    expect(
        roomReducer({
            rooms: []
        }, {
            type: "FETCH_ROOMS"
        })
    ).toEqual({
        rooms: []
    });
});

test("should handle FETCH_ROOMS_SUCCESS", () => {
    expect(
        roomReducer({
            rooms: []
        }, {
            type: "FETCH_ROOMS_SUCCESS",
            payload: [{ id: 1, name: "Title" }]
        })
    ).toEqual({
        rooms: [{ id: 1, name: "Title" }]
    });
});

test("should handle FETCH_ROOMS_FAIL", () => {
    expect(
        roomReducer({
            rooms: []
        }, {
            type: "FETCH_ROOMS_FAIL"
        })
    ).toEqual({
        rooms: []
    });
});