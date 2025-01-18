import { userFixture } from "../../fixtures/userFixture";
import User from "../../models/User";
import { managementReducer } from "../managementReducer";

test("should handle FETCH_USER", () => {
    const user: User = userFixture.create();

    expect(
        managementReducer({
            user: user,
            isAuthenticated: true
        }, {
            type: "FETCH_USER"
        })
    ).toEqual({
        user: {
            name: "",
            logoutUrl: ""
        },
        isAuthenticated: false
    });
});

test("should handle FETCH_USER_SUCCESS", () => {
    const user: User = userFixture.create();

    expect(
        managementReducer({
            user: {
                name: "",
                logoutUrl: ""
            },
            isAuthenticated: false
        }, {
            type: "FETCH_USER_SUCCESS",
            payload: user
        })
    ).toEqual({
        user: user,
        isAuthenticated: true
    });
});

test("should handle FETCH_USER_FAIL", () => {
    const user: User = userFixture.create();

    expect(
        managementReducer({
            user: user,
            isAuthenticated: true
        }, {
            type: "FETCH_USER_FAIL"
        })
    ).toEqual({
        user: {
            name: "",
            logoutUrl: ""
        },
        isAuthenticated: false
    });
});