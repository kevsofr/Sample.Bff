import { userFixture } from "../../fixtures/userFixture";
import User from "../../models/User";
import { userReducer } from "../userReducer";

test("should handle FETCH_USER", () => {
    const user: User = userFixture.create();

    expect(
        userReducer({
            user: user,
            isAuthenticated: true,
            phoneNumber: ""
        }, {
            type: "FETCH_USER"
        })
    ).toEqual({
        user: {
            name: "",
            role: "User",
            logoutUrl: ""
        },
        isAuthenticated: false,
        phoneNumber: ""
    });
});

test("should handle FETCH_USER_SUCCESS", () => {
    const user: User = userFixture.create();

    expect(
        userReducer({
            user: {
                name: "",
                role: "User",
                logoutUrl: ""
            },
            isAuthenticated: false,
            phoneNumber: ""
        }, {
            type: "FETCH_USER_SUCCESS",
            payload: user
        })
    ).toEqual({
        user: user,
        isAuthenticated: true,
        phoneNumber: ""
    });
});

test("should handle FETCH_USER_FAIL", () => {
    const user: User = userFixture.create();

    expect(
        userReducer({
            user: user,
            isAuthenticated: true,
            phoneNumber: ""
        }, {
            type: "FETCH_USER_FAIL"
        })
    ).toEqual({
        user: {
            name: "",
            role: "User",
            logoutUrl: ""
        },
        isAuthenticated: false,
        phoneNumber: ""
    });
});

test("should handle HELP_CANDIDATE", () => {
    const phoneNumber: string = "06 11 11 11 11";

    expect(
        userReducer({
            user: {
                name: "",
                role: "User",
                logoutUrl: ""
            },
            isAuthenticated: false,
            phoneNumber: phoneNumber
        }, {
            type: "HELP_CANDIDATE",
            payload: phoneNumber
        })
    ).toEqual({
        user: {
            name: "",
            role: "User",
            logoutUrl: ""
        },
        isAuthenticated: false,
        phoneNumber: phoneNumber
    });
});

test("should handle HELP_CANDIDATE_SUCCESS", () => {
    expect(
        userReducer({
            user: {
                name: "",
                role: "User",
                logoutUrl: ""
            },
            isAuthenticated: false,
            phoneNumber: "06 11 11 11 11"
        }, {
            type: "HELP_CANDIDATE_SUCCESS"
        })
    ).toEqual({
        user: {
            name: "",
            role: "User",
            logoutUrl: ""
        },
        isAuthenticated: false,
        phoneNumber: ""
    });
});

test("should handle HELP_CANDIDATE_FAIL", () => {
    expect(
        userReducer({
            user: {
                name: "",
                role: "User",
                logoutUrl: ""
            },
            isAuthenticated: false,
            phoneNumber: "06 11 11 11 11"
        }, {
            type: "HELP_CANDIDATE_FAIL"
        })
    ).toEqual({
        user: {
            name: "",
            role: "User",
            logoutUrl: ""
        },
        isAuthenticated: false,
        phoneNumber: ""
    });
});

test("should handle HELP_COMPANY", () => {
    const phoneNumber: string = "06 11 11 11 11";

    expect(
        userReducer({
            user: {
                name: "",
                role: "User",
                logoutUrl: ""
            },
            isAuthenticated: false,
            phoneNumber: phoneNumber
        }, {
            type: "HELP_COMPANY",
            payload: phoneNumber
        })
    ).toEqual({
        user: {
            name: "",
            role: "User",
            logoutUrl: ""
        },
        isAuthenticated: false,
        phoneNumber: phoneNumber
    });
});

test("should handle HELP_COMPANY_SUCCESS", () => {
    expect(
        userReducer({
            user: {
                name: "",
                role: "User",
                logoutUrl: ""
            },
            isAuthenticated: false,
            phoneNumber: "06 11 11 11 11"
        }, {
            type: "HELP_COMPANY_SUCCESS"
        })
    ).toEqual({
        user: {
            name: "",
            role: "User",
            logoutUrl: ""
        },
        isAuthenticated: false,
        phoneNumber: ""
    });
});

test("should handle HELP_COMPANY_FAIL", () => {
    expect(
        userReducer({
            user: {
                name: "",
                role: "User",
                logoutUrl: ""
            },
            isAuthenticated: false,
            phoneNumber: "06 11 11 11 11"
        }, {
            type: "HELP_COMPANY_FAIL"
        })
    ).toEqual({
        user: {
            name: "",
            role: "User",
            logoutUrl: ""
        },
        isAuthenticated: false,
        phoneNumber: ""
    });
});