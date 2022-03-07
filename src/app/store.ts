import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga"
import { roomReducer } from "../reducers/roomReducer";
import { RoomAction } from "../actions/roomActions";
import { initSagas } from "../sagas/rootSaga"
import RoomState from "../states/RoomState";

export interface RootState {
    readonly room: RoomState;
}

const rootReducer = combineReducers<RootState>({
    room: roomReducer
});

export type RootActions = RoomAction;

const sagaMiddleware = createSagaMiddleware();

const configureStore = (): any => {
    const store = createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware(sagaMiddleware)
        )
    );
    initSagas(sagaMiddleware);
    return store;
};

export const store = configureStore();