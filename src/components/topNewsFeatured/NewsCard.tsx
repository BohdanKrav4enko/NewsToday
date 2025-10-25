"use client"
import {Article} from "@/types";
import {
    FeaturedButton,
    FeaturedButtonWrapper,
    FeaturedDescription,
    FeaturedImage,
    FeaturedMeta,
    FeaturedTitle,
    FeaturedWrapper,
    useTopNewsFeatured
} from "@/components";

interface NewsCardProps {
    data: Article;
    accent?: boolean;
}

export const NewsCard = ({ data, accent = false }: NewsCardProps) => {
    const { formattedDate, formattedTime, isLoading, error} = useTopNewsFeatured();
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;

    return <section>
        <FeaturedWrapper accent={accent}>
            <FeaturedTitle>
                <a href={data.url} target="_blank" rel="noopener noreferrer">
                    {data.title}
                </a>
            </FeaturedTitle>

            {data.author && <FeaturedMeta>By {data.author}</FeaturedMeta>}
            <FeaturedMeta>
                Published {formattedDate} {formattedTime}
            </FeaturedMeta>
            {data.urlToImage && <FeaturedImage src={data.urlToImage} alt="cover"/>}
            <FeaturedDescription>{data.description}</FeaturedDescription>
            <FeaturedDescription>{data.content}</FeaturedDescription>

            <FeaturedButtonWrapper accent={accent}>
                    <FeaturedButton onClick={() => window.open(data.url, "_blank")} accent={accent}>
                        Keep Reading
                    </FeaturedButton>
            </FeaturedButtonWrapper>
        </FeaturedWrapper>
    </section>
};