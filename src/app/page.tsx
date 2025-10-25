"use client"

import {NewsCard, ReadMoreStoriesButton, TopNewsBar, usePaginatedNews} from "@/components";
import {NewsList} from "@/components/header/newsList";

export default function Home() {
    const {isLoading, error, loadMore, isLimitReached, topNews, page, data} = usePaginatedNews({
        country: "us",
        pageSize: 5
    });


    if (isLoading && page === 1) return <div>Loading...</div>;

    return (
        <>
            {error && <div>Error</div>}
            <TopNewsBar/>
            <NewsCard data={topNews} accent={true}/>
            <NewsList data={data.articles}/>
            {!isLimitReached && (
                <ReadMoreStoriesButton text={"Read More Stories"} onClick={loadMore}/>
            )}
        </>
    );
}
