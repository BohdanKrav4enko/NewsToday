import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_NEWS_API_BASE_URL;

export const newsApi = createApi({
    reducerPath: "newsApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getTopHeadlines: builder.query({
            query: ({ country = "us", page = 1, pageSize = 10 }) => `/top-headlines?country=${country}&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`,
        }),
    }),
});

export const { useGetTopHeadlinesQuery } = newsApi;
