import { fetchBaseQuery, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";

const rawBaseQuery = fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_REACT_APP_URL}`,
    prepareHeaders: (headers) => {
        headers.set("content-type", "application/json");
        headers.set("X-CSRF", "1");
        return headers;
    }
});

export const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> =
    async (args, api, extraOptions) => {
        const result = await rawBaseQuery(args, api, extraOptions);

        if (result.error && result.error.status === 401) {
            window.location.replace(`${import.meta.env.VITE_REACT_APP_URL}/bff/login?returnUrl=${window.location.pathname}`);
        }
        
        return result;
    }