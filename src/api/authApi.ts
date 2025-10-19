import { fetchBaseQuery, type FetchArgs } from "@reduxjs/toolkit/query"
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
      })
    }),
    logout:builder.mutation<any, void>({
      query:()=>({
        url:"logout",
        method:'GET',
      })
    })
  })
})
export const {useGenerateOtpMutation,useRegisterMutation,useLoginMutation,useVerifyTokenMutation,useLogoutMutation}=authApi

