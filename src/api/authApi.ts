import { fetchBaseQuery } from "@reduxjs/toolkit/query"
import {createApi} from "@reduxjs/toolkit/query/react"
import type { RegisterApi } from "../types/HookProps"
const apiBaseUrl=import.meta.env.VITE_BASE_URL
export const authApi=createApi({
  reducerPath:"authApi",
  baseQuery:fetchBaseQuery({baseUrl:apiBaseUrl+"/api/auth/",
      credentials: "include", 
  }),
  endpoints:(builder)=>({
    generateOtp:builder.mutation({
      query:(data)=>({
        url:"generateOtp",
        body:data,
        method:"POST",
         timeout:10000
      })   
    }),
    login:builder.mutation({
      query:(data)=>({
        url:"login",
        body:data,
        method:"POST",
         timeout:10000
      })  
    }),
    register:builder.mutation({
      query:(data:RegisterApi)=>({
        url:"register",
        body:data,
        method:"POST",
         timeout:10000
      })  
    }),
    verifyToken:builder.mutation<any, void>({
      query:()=>({
        url:"verifyToken",
        method:'GET',
        //  timeout:5000
      })
    }),
    logout:builder.mutation<any, void>({
      query:()=>({
        url:"logout",
        method:'GET',
        // timeout:5000
      })
    })
  })
})
export const {useGenerateOtpMutation,useRegisterMutation,useLoginMutation,useVerifyTokenMutation,useLogoutMutation}=authApi
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const api = createApi({
//   reducerPath: "api", // name for the slice in store
//   baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
//   endpoints: (builder) => ({
//     getPosts: builder.query<any[], void>({
//       query: () => "/posts",
//     }),
//     getPostById: builder.query<any, number>({
//       query: (id) => `/posts/${id}`,
//     }),
//   }),
// });

// // Auto-generated hooks
// export const { useGetPostsQuery, useGetPostByIdQuery } = api;
