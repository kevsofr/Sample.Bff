import { Reducer } from "react";
import { ManagementAction } from "../actions/ManagementAction";
import ManagementState from "../states/ManagementState";

const initialState: ManagementState = {
    user: {
        name: "",
        logoutUrl: ""
    },
    isAuthenticated: false
};

export const managementReducer: Reducer<ManagementState, ManagementAction> = (
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