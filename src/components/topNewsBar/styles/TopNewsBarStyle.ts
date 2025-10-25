"use client"
import styled from "styled-components";

export const TopNewsBarList = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: stretch;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 16px;
  flex-wrap: nowrap;
`;
export const TopNewsBarItem = styled.li`
  flex: 1 1 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
`;

export const TopNewsBarLink = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: #000;
  height: 100%;
  transition: transform 0.3s ease;

  &:hover img {
    transform: scale(1.05);
  }

  &:hover span {
    text-decoration: underline;
  }
`;

export const TopNewsBarImage = styled.img`
  width: 100%;
  object-fit: cover;
  aspect-ratio: 16 / 9;
  transition: transform 0.3s ease;
`;

export const TopNewsBarTitle = styled.span`
  margin-top: 8px;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  transition: text-decoration 0.2s;
`;