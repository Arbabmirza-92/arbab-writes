import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import  data  from "~/data.json"; 

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.sheraian.co.uk" }),
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: (page=1,limit=10) => `/api/blogs?userId=${data.userId}&page=${page}&limit=${limit}`,
    }),
    getBlogsdetail: builder.query({
      query: ({ slug }) => `/api/blog/${slug}`,
    }),
  }),
});

export const { useGetBlogsQuery, useGetBlogsdetailQuery } = api;
