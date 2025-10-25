"use client";

import styled from "styled-components";
import {Facebook, Instagram, Search, Youtube, Menu} from 'lucide-react';

const BaseHeader = styled.header<{position?: string}>`
    position: ${(props) => props.position || "relative"};
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    background-color: #0d0d0d;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid #1a1a1a;
    z-index: 1000;
`;

export const HeaderDesktopWrapper = styled(BaseHeader)`
    @media (max-width: 1023px) { display: none; }
`;
export const CompactHeaderWrapper = styled(BaseHeader)`
    @media (max-width: 1023px) { display: none; }
`;
export const HeaderTabletWrapper = styled(BaseHeader)`
    @media (max-width: 767px), (min-width: 1024px) { 
        display: none;
    }
`;
export const HeaderMobileWrapper = styled(BaseHeader)`
  @media (min-width: 768px) { display: none; }
`;

export const HeaderContent = styled.div`
    max-width: 1180px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`;
export const HeaderLogoContainer = styled.div`
    max-width: 1180px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const HeaderLogo = styled.h1<{fontSize: string}>`
    color: #c50606;
    text-align: center;
    font-size: ${(props => props.fontSize)};;
    font-weight: bold;
    letter-spacing: 1px;
    font-family: "Pochaevsk", sans-serif;
    cursor: pointer;
`;

export const HeaderNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const HeaderNavButton = styled.button<{fontSize: string}>`
    background: none;
    border: none;
    text-transform: uppercase;
    color: #fffffe;
    font-size: ${(props => props.fontSize)};
    cursor: pointer;
    padding: 8px 12px;
    border-radius: 8px;
    font-weight: 700;
    font-family: "Old Standard TT", sans-serif;

    &:hover {
        color: red;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
`;
export const HeaderSearchInput = styled.input`
    padding: 10px 40px 10px 16px;
    font-size: 1rem;
    border: 1px solid #000000;
    border-radius: 24px;
    background-color: rgba(76, 72, 72, 0.23);
    color: white;
    width: 200px;
    transition: width 0.3s ease;

    &:focus {
        background-color: rgba(122, 117, 117, 0.23);
        outline: none;
    }

    &::placeholder {
        color: white;
    }

`;
export const HeaderTipButton = styled.button`
    background-color: #c50606;
    color: #ffffff;
    font-size: 1rem;
    font-weight: 800;
    padding: 12px 14px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    
    &:focus {
        outline: none;
    }
`;
export const HeaderSocialInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    gap: 60px;
    @media (max-width: 1023px) {
        margin-left: 100px;
    }
`;

export const SocialLinks = styled.div`
    display: flex;
    gap: 10px;
    cursor: pointer;
    color: grey;
    @media (max-width: 1023px) {
        width: 20%;
    }
    a {
        &:hover {
            color: white;
        }
    }
`
export const HeaderContact = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    @media (max-width: 1023px) {display: none}
`
export const InputWrapper = styled.div`
    position: relative;
`
export const SearchIcon = styled(Search)`
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: white;
    cursor: pointer;

    &:hover {
        color: red;
    }
`;
export const StyledYoutube = styled(Youtube)`
    width: 36px;
    height: 36px;
    &:hover {
        color: red;
    }
`;
export const StyledInstagram = styled(Instagram)`
    width: 36px;
    height: 36px;
    &:hover {
        color: red;
    }
`;
export const StyledFacebook = styled(Facebook)`
    width: 36px;
    height: 36px;
    &:hover {
        color: red;
    }
`;
export const ContactText = styled.a`
    color: grey;
    font-size: 14px;
    cursor: pointer;
    &:hover {
        color: white;
    }
`;
export const StyledBurger = styled(Menu)`
    color: white;
    position: absolute;
    left: 20px;
    bottom: 20px;
    cursor: pointer;
`;
export const StyledSearch = styled(Search)`
    color: white;
    position: absolute;
    right: 20px;
    bottom: 20px;
    cursor: pointer;
`;
