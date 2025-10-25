"use client"
import {TopNewsBarImage, TopNewsBarItem, TopNewsBarLink, TopNewsBarList, TopNewsBarTitle} from "@/components";
import {useGetTopHeadlinesQuery} from "@/api";
import {Article} from "@/types";

export const TopNewsBar = () => {
    const {data, error, isLoading} = useGetTopHeadlinesQuery("us");

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;

    return <section>
            <TopNewsBarList>
                {data.articles
                    .filter((article: Article) => article.urlToImage)
                    .slice(0, 5)
                    .map((article: Article, index: number) => (
                    <TopNewsBarItem key={index}>
                        <TopNewsBarLink href={article.url} target="_blank" rel="noopener noreferrer">
                            {article.urlToImage && <TopNewsBarImage src={article.urlToImage} alt="cover"/>}
                            <TopNewsBarTitle>{article.title}</TopNewsBarTitle>
                        </TopNewsBarLink>
                    </TopNewsBarItem>
                ))}
            </TopNewsBarList>
        </section>
};
