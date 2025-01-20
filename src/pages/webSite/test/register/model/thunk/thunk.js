import {createAsyncThunk} from "@reduxjs/toolkit";

import {AdminBaseUrl, BackUrl, headers} from "constants/global";
import {useHttp} from "hooks/http.hook";

export const fetchData = createAsyncThunk(
    "registerSlice/fetchData",
    async () => {
        const {request} = useHttp();

        return await request(`${AdminBaseUrl}universities`, "GET", null, headers())
    }
)

export const fetchDataMk = createAsyncThunk(
    "registerSlice/fetchDataMk",
    async () => {
        const {request} = useHttp()

        return await request(`${AdminBaseUrl}schools`, "GET", null, headers())
    }
)

export const fetchFakultet = createAsyncThunk(
    "registerSlice/fetchFakultet",
    async (univer) => {
        const {request} = useHttp()

        return await request(`${AdminBaseUrl}faculties/${univer}`, "GET", null, headers())
    }
)


export const fetchGetHomeInfo = createAsyncThunk(
    "blockTestSlice/fetchGetHomeInfo",
    async () => {
        const {request} = useHttp()
        return await request(`${AdminBaseUrl}get_home_info`, "GET", null, headers())
    }
)

export const fetchDefenations = createAsyncThunk(
    "blockTestSlice/fetchDefenations",
    async () => {
        const {request} = useHttp()
        return await request(`${AdminBaseUrl}defenations`, "GET", null, headers())
    }
)