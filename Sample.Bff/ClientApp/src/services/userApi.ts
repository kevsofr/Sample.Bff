import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./baseQuery";
import User from "../models/User";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({
        getUser: builder.query<User, {}>({
            query: _ => "/bff/user",
            transformResponse: (response: unknown): User => {
                const data = response as { value: string }[];
                return {
                    name: data[5].value,
                    logoutUrl: data[8].value
                }
            }
        })
    })
});

export const {
    useGetUserQuery
} = userApi;