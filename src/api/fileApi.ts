import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import type { FileData } from "../types/ComponentsProps";

export const fileApi=createApi({
        reducerPath:'fileApi',
        baseQuery:fetchBaseQuery({baseUrl:'https://backend-u36p.onrender.com/api/file',credentials:'include'}),
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