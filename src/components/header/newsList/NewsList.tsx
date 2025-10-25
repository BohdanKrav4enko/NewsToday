"use client"
import {Article} from "@/types";
import {NewsCard} from "@/components";

interface NewsListProps {
    data: Article[];
    accent?: boolean;
}

export const NewsList = ({ data, accent = false }: NewsListProps) => {
    return (
        <>
            {data.map((item: Article, index) => (
                <NewsCard key={index} data={item} accent={accent && index === 0} />
            ))}
        </>
    );
};
