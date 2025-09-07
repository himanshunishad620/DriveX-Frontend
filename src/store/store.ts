import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../api/authApi";
import { fileApi } from "../api/fileApi";

export const store=configureStore({
        reducer:{
                [authApi.reducerPath]:authApi.reducer,
                [fileApi.reducerPath]:fileApi.reducer
        },
        middleware:(getDefaultMiddleWare)=>
                getDefaultMiddleWare().concat(authApi.middleware,fileApi.middleware)
        
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// import { configureStore } from "@reduxjs/toolkit";
// import { api } from "../services/api"; // your RTK Query api slice

// // Create store
// export const store = configureStore({
//   reducer: {
//     // Add API slice reducer
//     [api.reducerPath]: api.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(api.middleware),
// });

// // Types for TypeScript
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
