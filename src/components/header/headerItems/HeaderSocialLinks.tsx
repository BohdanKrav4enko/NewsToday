"use client"
import React from 'react';
import {SocialLinks, StyledFacebook, StyledInstagram, StyledYoutube} from "@/components";

export const HeaderSocialLinks = () => {
    return <SocialLinks>
            <StyledInstagram />
            <StyledFacebook />
            <StyledYoutube />
        </SocialLinks>
};
