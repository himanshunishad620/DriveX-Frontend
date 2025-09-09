import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const apiBaseUrl=import.meta.env.VITE_BASE_URL
// import type { FileData } from "../types/ComponentsProps";

export const fileApi=createApi({
        reducerPath:'fileApi',
        baseQuery:fetchBaseQuery({baseUrl:apiBaseUrl+'/api/file',credentials:'include'}),
         tagTypes: ["getStorage"] as const,
        endpoints:(builder)=>({
                getStorage:builder.query({
                        query:()=>"/getStorage",
                        providesTags: ["getStorage"],
                       
                }),
                deleteFile:builder.mutation({
                        query:(url:string)=>({
                                url:url
                        }),
                        invalidatesTags:["getStorage"]
                }),
                renameFile:builder.mutation({
                        query:(data)=>({
                                url:"/renameFile",
                                body:data,
                                method:"POST"
                        }),
                        invalidatesTags:["getStorage"]
                })
        })
})
export const {useGetStorageQuery,useDeleteFileMutation,useRenameFileMutation}=fileApi