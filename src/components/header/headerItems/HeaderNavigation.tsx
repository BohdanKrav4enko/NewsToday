"use client"
import { HeaderNav, HeaderNavButton } from "@/components";

const menuItems = ["News", "Top", "Analysis", "Economy", "Sports", "Deals"];

export const HeaderNavigation = (props: {fontSize: string}) => {
    const {fontSize} = props;
    return (
        <HeaderNav>
            {menuItems.map((item) => (
                <HeaderNavButton fontSize={fontSize} key={item}>{item}</HeaderNavButton>
            ))}
        </HeaderNav>
    );
};
