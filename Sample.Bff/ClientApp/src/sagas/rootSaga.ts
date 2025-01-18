import { call } from "redux-saga/effects";
import { SagaMiddleware } from "redux-saga";
import managementSaga from "./managementSaga";
import valueSaga from "./valueSaga";
import { log } from "../api/managementApi";

const sagas = [
    managementSaga,
    valueSaga
];

export const initSagas = (sagaMiddleware: SagaMiddleware<object>) =>
    sagas.forEach(sagaMiddleware.run.bind(sagaMiddleware));

export function* callLog(error: unknown) {
    if (error instanceof Error) {
        yield call(log, error);
    } else {
        console.error("Unknown :", error);
    }
};