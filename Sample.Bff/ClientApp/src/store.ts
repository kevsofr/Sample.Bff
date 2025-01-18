import { combineReducers, Reducer } from "redux";
import createSagaMiddleware from "redux-saga";
import { initSagas } from "./sagas/rootSaga";
import { configureStore } from "@reduxjs/toolkit";
import { createBrowserHistory } from "history";
import { createReduxHistoryContext, RouterState } from "redux-first-history";
import { managementReducer } from "./reducers/managementReducer";
import { valueReducer } from "./reducers/valueReducer";
import ManagementState from "./states/ManagementState";
import ValueState from "./states/ValueState";
import { ManagementAction } from "./actions/ManagementAction";
import { ValueAction } from "./actions/ValueAction";

interface Reducers {
    readonly router: Reducer<RouterState>;
    readonly management: Reducer<ManagementState, ManagementAction>;
    readonly value: Reducer<ValueState, ValueAction>;
}

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({ 
    history: createBrowserHistory()
});

const rootReducer = combineReducers<Reducers>({
    router: routerReducer,
    management: managementReducer,
    value: valueReducer
});

export type RootState = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware).concat(routerMiddleware)
});

export const history = createReduxHistory(store);

initSagas(sagaMiddleware);