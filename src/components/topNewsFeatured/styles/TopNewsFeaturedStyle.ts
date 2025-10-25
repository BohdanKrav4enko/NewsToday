"use client"
import styled from "styled-components";

export const FeaturedWrapper = styled.div<{accent: boolean}>`
  border: ${(props) => props.accent ? "10px solid #c50606" : "none"} ;
  padding: 16px;
`;

export const FeaturedTitle = styled.h2`
    font-size: 50px;
    font-weight: bold;
    text-transform: uppercase;
    color: black;
    line-height: 1.1;
    margin: 0;
    a {
        text-decoration: none;
        color: inherit;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const FeaturedMeta = styled.p`
  margin: 10px 0;
  font-style: italic;
`;

export const FeaturedImage = styled.img`
  width: 100%;
  object-fit: cover;
  margin: 16px 0;
`;

export const FeaturedDescription = styled.p`
    font-size: 18px;
    margin: 20px 0;
    line-height: 1.8;
`;

export const FeaturedButtonWrapper = styled.div<{accent: boolean}>`
  display: flex;
  justify-content: ${(props) => props.accent ? "center" : "flex-start"};
  margin: 20px 0;
`;

export const FeaturedButton = styled.button<{accent: boolean}>`
    background-color: ${(props) => props.accent ? "#c50606" : "white"};
    color: ${(props) => props.accent ? "white" : "black"};
    text-transform: uppercase;
    padding: ${(props) => props.accent ? "24px 48px" : "10px 28px"};
    cursor: pointer;
    font-weight: bold;
    font-size: 24px;
    font-style: italic;
    border: ${(props) => props.accent ? "none" : "6px solid #c50606"};
    transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;

    &:hover {
        background-color: ${(props) => props.accent ? "#aa1f1f" : "#c50606"};
        color: white;
    }
`;
