import { FeaturedButton, ReadMoreStoriesWrapper } from "@/components";
import React from "react";

interface ReadMoreStoriesButtonProps {
    onClick?: () => void;
    text: string;
}

export const ReadMoreStoriesButton: React.FC<ReadMoreStoriesButtonProps> = ({ onClick, text }) => {
    return (
        <ReadMoreStoriesWrapper>
            <FeaturedButton onClick={onClick} accent={true}>
                {text}
            </FeaturedButton>
        </ReadMoreStoriesWrapper>
    );
};
