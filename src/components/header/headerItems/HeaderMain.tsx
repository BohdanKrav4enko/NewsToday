"use client"
import {HeaderLogo, HeaderLogoContainer, HeaderTop, SearchInput} from "@/components";
import Link from "next/link";

export const HeaderMain = (props: {fontSize: string}) => {
    const {fontSize} = props;
    return (
        <HeaderLogoContainer>
            <HeaderTop />
            <Link href="/">
                <HeaderLogo fontSize={fontSize}>NWT</HeaderLogo>
            </Link>
            <SearchInput/>
        </HeaderLogoContainer>
    );
};
