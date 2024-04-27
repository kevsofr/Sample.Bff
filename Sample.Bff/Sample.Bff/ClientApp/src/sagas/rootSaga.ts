import userSaga from "./userSaga";
import valueSaga from "./valueSaga";

const sagas = [
    userSaga,
    valueSaga
];

export const initSagas = (sagaMiddleware: any) =>
    sagas.forEach(sagaMiddleware.run.bind(sagaMiddleware));