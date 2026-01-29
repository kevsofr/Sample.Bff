import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./baseQuery";

export const logApi = createApi({
    reducerPath: "logApi",
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({
        log: builder.mutation<{}, Error>({
            query: error => ({
                url: "/log",
                method: "POST",
                body: {
                    logLevel: 4,
                    message: error.toString()
                }
            })
        })
    })
});

export const {
    useLogMutation
} = logApi;