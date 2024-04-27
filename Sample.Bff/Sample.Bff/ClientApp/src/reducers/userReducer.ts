import { Reducer } from "react";
import { UserAction } from "../actions/UserAction";
import UserState from "../states/UserState";

const initialState: UserState = {
    user: {
        name: "",
        logoutUrl: ""
    },
    isAuthenticated: false
};

export const userReducer: Reducer<UserState, UserAction> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "FETCH_USER":
            return {
                ...initialState
            };
        case "FETCH_USER_SUCCESS":
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true
            };
        case "FETCH_USER_FAIL":
            return {
                ...initialState
            };
        default:
            return state;
    }
};