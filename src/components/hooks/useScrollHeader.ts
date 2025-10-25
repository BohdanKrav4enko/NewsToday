"use client"
import {useEffect, useState} from "react";

export const useScrollHeader = () => {
    const [showMiniHeader, setShowMiniHeader] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 240) setShowMiniHeader(true);
            else setShowMiniHeader(false);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return showMiniHeader
};