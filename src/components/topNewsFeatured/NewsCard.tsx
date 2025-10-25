"use client"
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
    top?: boolean;
}

export const TopNewsFeatured = () => {
    const {topNews, formattedDate, formattedTime, isLoading, error} = useTopNewsFeatured();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;

    return <section>
        <FeaturedWrapper>
            <FeaturedTitle>
                <a href={topNews.url} target="_blank" rel="noopener noreferrer">
                    {topNews.title}
                </a>
            </FeaturedTitle>

            <FeaturedMeta>By {topNews.author}</FeaturedMeta>
            <FeaturedMeta>
                Published {formattedDate} {formattedTime}
            </FeaturedMeta>

            <FeaturedImage src={topNews.urlToImage} alt="cover"/>
            <FeaturedDescription>{topNews.description}</FeaturedDescription>

            <FeaturedButtonWrapper>
                <FeaturedButton onClick={() => window.open(topNews.url, "_blank")}>
                    Keep Reading
                </FeaturedButton>
            </FeaturedButtonWrapper>
        </FeaturedWrapper>
    </section>
};

