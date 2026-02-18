import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

type HookState<T> =
  | { data: undefined; isLoading: true; isError: false; error?: undefined }
  | { data: T; isLoading: false; isError: false; error?: undefined }
  | { data: undefined; isLoading: false; isError: true; error: unknown };

export const mockLoading = <T = unknown>(): HookState<T> => ({
    data: undefined,
    isLoading: true,
    isError: false
});

export const mockSuccess = <T>(data: T): HookState<T> => ({
    data,
    isLoading: false,
    isError: false
});

export const mockError = (err: Partial<FetchBaseQueryError> | any): HookState<any> => ({
    data: undefined,
    isLoading: false,
    isError: true,
    error: err
});