import managementSaga from "./managementSaga";
import valueSaga from "./valueSaga";

const sagas = [
    managementSaga,
    valueSaga
];

export const initSagas = (sagaMiddleware: any) =>
    sagas.forEach(sagaMiddleware.run.bind(sagaMiddleware));