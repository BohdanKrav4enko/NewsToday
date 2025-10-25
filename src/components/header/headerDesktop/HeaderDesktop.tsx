"use client"
import {HeaderContent, HeaderDesktopWrapper, HeaderMain, HeaderNavigation} from "@/components";

export const HeaderDesktop = () => {
    return (
        <HeaderDesktopWrapper position={"relative"}>
            <HeaderContent>
                <HeaderMain fontSize={"140px"}/>
                <HeaderNavigation fontSize={"40px"}/>
            </HeaderContent>
        </HeaderDesktopWrapper>
    );
};

