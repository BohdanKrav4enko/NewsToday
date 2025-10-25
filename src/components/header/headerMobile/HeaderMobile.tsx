"use client"
import {HeaderLogo, HeaderMobileWrapper, StyledBurger, StyledSearch} from "@/components";

export const HeaderMobile = () => {
    return (
        <HeaderMobileWrapper>
                <HeaderLogo fontSize={"80px"}>NWT</HeaderLogo>
            <StyledBurger size={"20px"}/>
            <StyledSearch size={"20px"}/>
        </HeaderMobileWrapper>
    );
};

