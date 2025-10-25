"use client"
import { useGetTopHeadlinesQuery } from "@/api";

export const useTopNewsFeatured = () => {
    const { data, error, isLoading } = useGetTopHeadlinesQuery("us");

    if (!data || !data.articles) return { topNews: null, error, isLoading };

    const topNews = data.articles[0];

    const date = new Date(topNews.publishedAt);
    const formattedDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
    const formattedTime = date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
    });

    return {
        topNews,
        formattedDate,
        formattedTime,
        isLoading,
        error,
    };
};
