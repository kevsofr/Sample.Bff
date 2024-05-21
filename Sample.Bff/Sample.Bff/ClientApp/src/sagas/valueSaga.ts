import { all, call, put, select, takeLatest } from "redux-saga/effects";
import { RootState } from "../store";
import Value from "../models/Value";
import { getValueById, getValues, createValue, updateValue, deleteValue } from "../api/valueApi";
import { log } from "../api/managementApi";

export function* fetchValues() {
    try {
        const values: Value[] = yield call(getValues);
        yield put({
            type:"FETCH_VALUES_SUCCESS",
            payload: values
        });
    } catch (error) {
        yield call(log, error);
        yield put({
            type:"FETCH_VALUES_FAIL"
        });
    }
}

export function* fetchValue() {
    try {
        const id: number = yield select((s: RootState) => s.value.currentId);
        let value: Value = {
            id: 0,
            name: ""
        };

        if (id > 0) {
            value = yield call(getValueById, id);
        }

        yield put({
            type:"FETCH_VALUE_SUCCESS",
            payload: value
        });
    } catch (error) {
        yield call(log, error);
        yield put({
            type:"FETCH_VALUE_FAIL"
        });
    }
}

export function* createNewValue() {
    try {
        const value: Value = yield select((s: RootState) => s.value.currentValue);
        const createdValue: Value = yield call(createValue, value);
        yield put({
            type:"CREATE_VALUE_SUCCESS",
            payload: createdValue
        });
    } catch (error) {
        yield call(log, error);
        yield put({
            type:"CREATE_VALUE_FAIL"
        });
    }
}

export function* updateCurrentValue() {
    try {
        const value: Value = yield select((s: RootState) => s.value.currentValue);
        const updatedValue: Value = yield call(updateValue, value);
        yield put({
            type:"UPDATE_VALUE_SUCCESS",
            payload: updatedValue
        });
    } catch (error) {
        yield call(log, error);
        yield put({
            type:"UPDATE_VALUE_FAIL"
        });
    }
}

export function* deleteCurrentValue() {
    try {
        const id: number = yield select((s: RootState) => s.value.currentId);
        yield call(deleteValue, id);
        yield put({
            type:"DELETE_VALUE_SUCCESS"
        });
    } catch (error) {
        yield call(log, error);
        yield put({
            type:"DELETE_VALUE_FAIL"
        });
    }
}

export default function* valueSaga() {
    yield all([
        takeLatest("FETCH_VALUES", fetchValues),
        takeLatest("FETCH_VALUE", fetchValue),
        takeLatest("CREATE_VALUE", createNewValue),
        takeLatest("UPDATE_VALUE", updateCurrentValue),
        takeLatest("DELETE_VALUE", deleteCurrentValue)
    ]);
}