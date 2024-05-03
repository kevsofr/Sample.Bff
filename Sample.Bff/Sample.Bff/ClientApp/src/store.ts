import { combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { initSagas } from "./sagas/rootSaga";
import { configureStore } from "@reduxjs/toolkit";
import { createBrowserHistory } from "history";
import { createReduxHistoryContext } from "redux-first-history";
import { userReducer } from "./reducers/userReducer";
import { valueReducer } from "./reducers/valueReducer";
import UserState from "./states/UserState";
import ValueState from "./states/ValueState";

export interface RootState {
    readonly router: any;
    readonly user: UserState | any;
    readonly value: ValueState | any;
}

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({ 
    history: createBrowserHistory()
});

const rootReducer = combineReducers<RootState>({
    router: routerReducer,
    user: userReducer,
    value: valueReducer
});
    
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware).concat(routerMiddleware)
});

export const history = createReduxHistory(store);

initSagas(sagaMiddleware);