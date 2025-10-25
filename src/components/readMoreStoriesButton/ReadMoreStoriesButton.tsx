import { FeaturedButton, ReadMoreStoriesWrapper } from "@/components";
import React from "react";

interface ReadMoreStoriesButtonProps {
    onClick?: () => void;
    children: string;
}

export const ReadMoreStoriesButton: React.FC<ReadMoreStoriesButtonProps> = ({ onClick, children }) => {
    return (
        <ReadMoreStoriesWrapper>
            <FeaturedButton onClick={onClick} accent={true}>
                {children}
            </FeaturedButton>
        </ReadMoreStoriesWrapper>
    );
};
