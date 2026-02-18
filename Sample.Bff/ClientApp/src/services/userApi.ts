import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./baseQuery";
import User from "../models/User";

interface UserResponse {
    value: string;
}

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({
        getUser: builder.query<User, {}>({
            query: _ => "/bff/user",
            transformResponse: (response: UserResponse[]): User => ({
                name: response[5].value,
                logoutUrl: response[8].value
            })
        })
    })
});

export const {
    useGetUserQuery
} = userApi;