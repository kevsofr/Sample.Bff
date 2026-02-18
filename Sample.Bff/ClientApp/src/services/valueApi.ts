import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./baseQuery";
import Value from "../models/Value";

interface ValueResponse {
    values: Value[];
}

export const valueApi = createApi({
    reducerPath: "valueApi",
    baseQuery: baseQueryWithReauth,
    tagTypes: ["Value"],
    endpoints: builder => ({
        getValues: builder.query<ValueResponse, {}>({
            query: () => ({ url: "/remote/values" }),
            providesTags: result =>
                result
                    ? [
                        ...result.values.map(v => ({ type: "Value" as const, id: v.id })),
                        { type: "Value", id: "LIST" }
                    ]
                    : [{ type: "Value", id: "LIST" }]
        }),

        getValue: builder.query<Value, number>({
            query: id => `/remote/values/${id}`,
            providesTags: (_result, _error, id) => [{ type: "Value", id }]
        }),

        createValue: builder.mutation<Value, Value>({
            query: body => ({ url: "/remote/values", method: "POST", body }),
            invalidatesTags: [{ type: "Value", id: "LIST" }]
        }),

        updateValue: builder.mutation<Value, Value>({
            query: ({ id, ...patch }) => ({ url: `/remote/values/${id}`, method: "PUT", body: patch }),
            invalidatesTags: (_result, _error, { id }) => [{ type: "Value", id }]
        }),

        deleteValue: builder.mutation<void, number>({
            query: id => ({ url: `/remote/values/${id}`, method: "DELETE" }),
            invalidatesTags: (_result, _error, id) => [
                { type: "Value", id },
                { type: "Value", id: "LIST" }
            ]
        })
    })
});

export const {
    useGetValuesQuery,
    useGetValueQuery,
    useCreateValueMutation,
    useUpdateValueMutation,
    useDeleteValueMutation
} = valueApi;