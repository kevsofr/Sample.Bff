import { combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { initSagas } from "./sagas/rootSaga";
import { configureStore } from "@reduxjs/toolkit";
import { createBrowserHistory } from "history";
import { createReduxHistoryContext } from "redux-first-history";
import { managementReducer } from "./reducers/managementReducer";
import { valueReducer } from "./reducers/valueReducer";
import ManagementState from "./states/ManagementState";
import ValueState from "./states/ValueState";

export interface RootState {
    readonly router: any;
    readonly management: ManagementState | any;
    readonly value: ValueState | any;
}

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({ 
    history: createBrowserHistory()
});

const rootReducer = combineReducers<RootState>({
    router: routerReducer,
    management: managementReducer,
    value: valueReducer
});
    
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware).concat(routerMiddleware)
});

export const history = createReduxHistory(store);

initSagas(sagaMiddleware);