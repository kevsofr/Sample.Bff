import { roomReducer } from "../roomReducer";

test("should handle FETCH_ROOMS", () => {
    expect(
        roomReducer({
            rooms: [],
            currentRoom: undefined,
            isOpen: false,
            isLoading: false
        }, {
            type: "FETCH_ROOMS"
        })
    ).toEqual({
        rooms: [],
        currentRoom: undefined,
        isOpen: false,
        isLoading: false
    });
});

test("should handle FETCH_ROOMS_SUCCESS", () => {
    expect(
        roomReducer({
            rooms: [],
            currentRoom: undefined,
            isOpen: false,
            isLoading: false
        }, {
            type: "FETCH_ROOMS_SUCCESS",
            payload: [{ id: 1, name: "Title" }]
        })
    ).toEqual({
        rooms: [{ id: 1, name: "Title" }],
        currentRoom: undefined,
        isOpen: false,
        isLoading: false
    });
});

test("should handle FETCH_ROOMS_FAIL", () => {
    expect(
        roomReducer({
            rooms: [],
            currentRoom: undefined,
            isOpen: false,
            isLoading: false
        }, {
            type: "FETCH_ROOMS_FAIL"
        })
    ).toEqual({
        rooms: [],
        currentRoom: undefined,
        isOpen: false,
        isLoading: false
    });
});