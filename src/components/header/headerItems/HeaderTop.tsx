"use client"
import {ContactText, HeaderContact, HeaderSocialInfo, HeaderSocialLinks, HeaderTipButton} from "@/components";

export const HeaderTop = () => {
    return (
        <HeaderSocialInfo>
                <HeaderSocialLinks/>
            <HeaderContact>
                <HeaderTipButton>GOT A TRIP?</HeaderTipButton>
                <ContactText>Email Or Call (888) 847-9869</ContactText>
            </HeaderContact>
        </HeaderSocialInfo>
    );
};
