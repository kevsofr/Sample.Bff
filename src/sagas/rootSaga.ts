import room from "./roomSaga";

const sagas = [
    room
];

export const initSagas = (sagaMiddleware: any) =>
    sagas.forEach(sagaMiddleware.run.bind(sagaMiddleware));