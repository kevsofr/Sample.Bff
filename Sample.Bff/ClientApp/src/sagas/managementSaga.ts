import { all, call, put, takeLatest } from "redux-saga/effects";
import { getUser } from "../api/managementApi";
import User from "../models/User";
import { callLog } from "./rootSaga";

export function* fetchUser() {
    try {
        const user: User = yield call(getUser);
        yield put({
            type:"FETCH_USER_SUCCESS",
            payload: user
        });
    } catch (error) {
        yield call(callLog, error);
        yield put({
            type:"FETCH_USER_FAIL"
        });
    }
}

function redirectToLogin() {
    window.location.replace(`${import.meta.env.VITE_REACT_APP_URL}/bff/login?returnUrl=${window.location.pathname}`);
}

export default function* userSaga() {
    yield all([
        takeLatest("FETCH_USER", fetchUser),
        takeLatest("FETCH_USER_FAIL", redirectToLogin)
    ]);
}