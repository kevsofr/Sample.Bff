import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga"
import { roomReducer, RoomState } from "../reducers/roomReducer";

import { RoomAction } from "../actions/roomActions";
import { initSagas } from "../sagas/rootSaga"

export interface RootState {
    readonly room: RoomState;
}

const rootReducer = combineReducers<RootState>({
    room: roomReducer
});

export type RootActions = RoomAction;

const sagaMiddleware = createSagaMiddleware();

export const store = (): any => {
    const store = createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware(sagaMiddleware)
        )
    );
    initSagas(sagaMiddleware);
    return store;
};