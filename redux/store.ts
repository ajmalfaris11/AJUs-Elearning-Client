'use client';
import {configureStore} from "@reduxjs/toolkit";
import {apiSlice} from "./features/api/apiSlice";
import authSlice from "./features/auth/authSlice";
import { Solitreo } from "next/font/google";

export const store = configureStore ({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth:authSlice
    },
    devTools: false,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
});

//  call the refresh token function on every page load
const initializeApp = async () => {
    await store.dispatch(apiSlice.endpoints.refreshToken.initiate({},{forceRefetch:true}));
}

initializeApp();