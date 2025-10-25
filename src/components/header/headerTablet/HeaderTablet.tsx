"use client"
import {
    HeaderContent,
    HeaderLogo,
    HeaderSocialInfo,
    HeaderSocialLinks,
    HeaderTabletWrapper,
    StyledBurger,
    StyledSearch
} from "@/components";

export const HeaderTablet = () => {
    return (
        <HeaderTabletWrapper>
            <HeaderContent>
                <HeaderSocialInfo>
                    </HeaderSocialInfo>
                    <HeaderSocialLinks/>
                <HeaderLogo fontSize={"100px"}>NWT</HeaderLogo>
            </HeaderContent>
            <StyledBurger size={"40px"}/>
            <StyledSearch size={"40px"}/>
        </HeaderTabletWrapper>
    );
};