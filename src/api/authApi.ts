import { fetchBaseQuery } from "@reduxjs/toolkit/query"
import {createApi} from "@reduxjs/toolkit/query/react"
import type { RegisterApi } from "../types/HookProps"
const apiBaseUrl=import.meta.env.VITE_BASE_URL

export const authApi=createApi({
  reducerPath:"authApi",
  baseQuery:fetchBaseQuery({baseUrl:apiBaseUrl+"/api/auth/",
      // baseQuery:fetchBaseQuery({baseUrl:"http://localhost:4000/api/auth/",
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
    forgotPassword:builder.mutation({
      query:(email)=>({
        url:`forgotPassword`,
        body:email,
        method:"POST",
        timeout:10000
      })  
    }),
    resetPassword:builder.mutation({
      query:(data)=>({
        url:`resetPassword`,
        body:data,
        method:"POST",
        timeout:10000
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
export const {useResetPasswordMutation,useForgotPasswordMutation,useGenerateOtpMutation,useRegisterMutation,useLoginMutation,useVerifyTokenMutation,useLogoutMutation}=authApi

