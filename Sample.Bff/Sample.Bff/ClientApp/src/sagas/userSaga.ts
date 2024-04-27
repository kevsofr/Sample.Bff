import { all, call, put, takeLatest } from "redux-saga/effects";
import { getUser } from "../api/userApi";
import User from "../models/User";

export function* fetchUser() {
    try {
        const user: User = yield call(getUser);
        yield put({
            type:"FETCH_USER_SUCCESS",
            payload: user
        });
    } catch {
        yield put({
            type:"FETCH_USER_FAIL"
        });
    }
}

function* redirectToLogin() {
    window.location.replace(`${process.env.REACT_APP_URL}/bff/login?returnUrl=${window.location.pathname}`);
}

export default function* userSaga() {
    yield all([
        takeLatest("FETCH_USER", fetchUser),
        takeLatest("FETCH_USER_FAIL", redirectToLogin)
    ]);
}