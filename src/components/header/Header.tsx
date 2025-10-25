"use client"
import {CompactHeader, useScrollHeader, HeaderTablet, HeaderMobile, HeaderDesktop} from "@/components";

export const Header = () => {
    const showMiniHeader  = useScrollHeader()

    return <>
            <HeaderDesktop/>
            <HeaderTablet/>
            <HeaderMobile/>
            {showMiniHeader && <CompactHeader/>}
        </>
};