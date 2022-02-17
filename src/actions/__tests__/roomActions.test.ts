import { fetchRooms } from "../roomActions";

test("should create an action to fetch rooms", () => {
    const expectedAction = {
        type: "FETCH_ROOMS"
    };

    expect(fetchRooms()).toEqual(expectedAction)
});