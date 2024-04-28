import { Reducer } from "react";
import ValueState from "../states/ValueState";
import { ValueAction } from "../actions/ValueAction";

const initialState: ValueState = {
    values: [],
    currentId: 0,
    currentValue: {
        id: 0,
        name: ""
    },
    displayModal: false
};

export const valueReducer: Reducer<ValueState, ValueAction> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "FETCH_VALUES":
            return {
                ...state
            };
        case "FETCH_VALUES_SUCCESS":
            return {
                ...state,
                values: action.payload
            };
        case "FETCH_VALUES_FAIL":
            return {
                ...initialState
            };
        case "FETCH_VALUE":
            return {
                ...state,
                currentId: action.payload
            };
        case "FETCH_VALUE_SUCCESS":
            return {
                ...state,
                currentId: 0,
                currentValue: action.payload
            };
        case "FETCH_VALUE_FAIL":
            return {
                ...initialState
            };
        case "OPEN_MODAL_VALUE":
            return {
                ...state,
                currentId: action.payload,
                displayModal: true
            };
        case "CLOSE_MODAL_VALUE":
            return {
                ...state,
                displayModal: false
            };
        case "CREATE_VALUE":
            return {
                ...state,
                currentValue: action.payload
            };
        case "CREATE_VALUE_SUCCESS":
            return {
                ...state,
                values: [...state.values, action.payload],
                currentValue: {
                    id: 0,
                    name: "" 
                }
            };
        case "CREATE_VALUE_FAIL":
            return {
                ...initialState
            };
        case "UPDATE_VALUE":
            return {
                ...state,
                currentValue: action.payload
            };
        case "UPDATE_VALUE_SUCCESS":
            return {
                ...state,
                values: [...state.values.filter(v => v.id !== action.payload.id), action.payload],
                currentValue: {
                    id: 0,
                    name: "" 
                }
            };
        case "UPDATE_VALUE_FAIL":
            return {
                ...initialState
            };
        case "DELETE_VALUE":
            return {
                ...state,
                currentId: action.payload
            };
        case "DELETE_VALUE_SUCCESS":
            return {
                ...state,
                values: [...state.values.filter(v => v.id !== state.currentId)],
                currentId: 0
            };
        case "DELETE_VALUE_FAIL":
            return {
                ...initialState
            };
        default:
            return state;
    }
};