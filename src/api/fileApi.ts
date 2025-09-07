import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import type { FileData } from "../types/ComponentsProps";

export const fileApi=createApi({
        reducerPath:'fileApi',
        baseQuery:fetchBaseQuery({baseUrl:'http://localhost:4000/api/file',credentials:'include'}),
         tagTypes: ["getStorage"] as const,
        endpoints:(builder)=>({
                getStorage:builder.query({
                        query:()=>"/getStorage",
                        providesTags: ["getStorage"],
                        // transformResponse:(response:{result:{files:FileData[]}})=>{
                        //         return response.result.files.sort((a,b)=>a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
                        // }
                }),
//                  transformResponse: (response: { result: { files: FileData[] } }) => {
//         // ✅ Example: sort files by createdAt descending by default
//         return response.result.files.sort(
//           (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
//         );
//       },
//     }),
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