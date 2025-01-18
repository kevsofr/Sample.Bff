import Value from "../models/Value";

type FetchValues = {
    type: "FETCH_VALUES";
};

type FetchValuesSuccess = {
    type: "FETCH_VALUES_SUCCESS";
    payload: Value[]
};

type FetchValuesFail = {
    type: "FETCH_VALUES_FAIL";
};

type FetchValue = {
    type: "FETCH_VALUE";
    payload: number;
};

type FetchValueSuccess = {
    type: "FETCH_VALUE_SUCCESS";
    payload: Value;
};

type FetchValueFail = {
    type: "FETCH_VALUE_FAIL";
};

type OpenModalValue = {
    type: "OPEN_MODAL_VALUE";
    payload: number;
};

type CloseModalValue = {
    type: "CLOSE_MODAL_VALUE";
};

type CreateValue = {
    type: "CREATE_VALUE";
    payload: Value;
};

type CreateValueSuccess = {
    type: "CREATE_VALUE_SUCCESS";
    payload: Value;
};

type CreateValueFail = {
    type: "CREATE_VALUE_FAIL";
};

type UpdateValue = {
    type: "UPDATE_VALUE";
    payload: Value;
};

type UpdateValueSuccess = {
    type: "UPDATE_VALUE_SUCCESS";
    payload: Value;
};

type UpdateValueFail = {
    type: "UPDATE_VALUE_FAIL";
};

type DeleteValue = {
    type: "DELETE_VALUE";
    payload: number;
};

type DeleteValueSuccess = {
    type: "DELETE_VALUE_SUCCESS";
};

type DeleteValueFail = {
    type: "DELETE_VALUE_FAIL";
};
export type ValueAction = FetchValues
    | FetchValuesSuccess
    | FetchValuesFail
    | FetchValue
    | FetchValueSuccess
    | FetchValueFail
    | OpenModalValue
    | CloseModalValue
    | CreateValue
    | CreateValueSuccess
    | CreateValueFail
    | UpdateValue
    | UpdateValueSuccess
    | UpdateValueFail
    | DeleteValue
    | DeleteValueSuccess
    | DeleteValueFail