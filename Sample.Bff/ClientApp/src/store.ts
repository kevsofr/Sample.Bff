import { configureStore } from "@reduxjs/toolkit";
import { valueApi } from "./services/valueApi";
import { userApi } from "./services/userApi";
import valuesUiReducer from "./features/values/valuesUiSlice"

export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        [valueApi.reducerPath]: valueApi.reducer,
        valuesUi: valuesUiReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(userApi.middleware)
        .concat(valueApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;