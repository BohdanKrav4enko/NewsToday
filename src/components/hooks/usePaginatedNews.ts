"use client"
import { useState, useEffect } from "react";
import { useGetTopHeadlinesQuery } from "@/api";
import { Article } from "@/types";
import {useTopNewsFeatured} from "@/components";

interface UsePaginatedNewsOptions {
    country?: string;
    pageSize?: number;
}

export const usePaginatedNews = ({ country = "us", pageSize = 5 }: UsePaginatedNewsOptions) => {
    const { topNews } = useTopNewsFeatured();
    const [page, setPage] = useState(1);
    const [allArticles, setAllArticles] = useState<Article[]>([]);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [isLimitReached, setIsLimitReached] = useState(false);

    const { data, isLoading, error } = useGetTopHeadlinesQuery({ country, page, pageSize });


    useEffect(() => {
        if (data?.articles && data.articles.length > 0) {
            setAllArticles(prev => [...prev, ...data.articles]);
        } else if (data?.articles.length === 0) {
            setIsLimitReached(true);
        }
        setIsLoadingMore(false);
    }, [data]);

    const loadMore = () => {
        if (!isLoadingMore && !isLimitReached) {
            setIsLoadingMore(true);
            setPage(prev => prev + 1);
        }
    };

    return {
        allArticles,
        isLoading,
        error,
        loadMore,
        isLoadingMore,
        isLimitReached,
        topNews,
        page,
        data
    };
};
