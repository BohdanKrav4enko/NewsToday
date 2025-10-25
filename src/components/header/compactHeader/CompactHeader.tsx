"use client"
import {CompactHeaderWrapper, HeaderContent, HeaderLogo, HeaderNavigation, SearchInput} from "@/components";

export const CompactHeader = () => {
    return (
        <CompactHeaderWrapper position={"fixed"}>
            <HeaderContent style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "100%" }}>
                <HeaderLogo fontSize={"50px"}>NWT</HeaderLogo>
                <HeaderNavigation fontSize={"26px"}/>
                <SearchInput/>
            </HeaderContent>
        </CompactHeaderWrapper>
    );
};
