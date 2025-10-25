import type {Metadata} from "next";
import {Anton, Geist, Geist_Mono, Old_Standard_TT, Pochaevsk, Roboto} from "next/font/google";
import "./globals.css";
import {AppProviders} from "@/app/Providers";
import {GlobalStyle} from "@/styles/GlobalStyle";
import React from "react";
import {Container, Header} from "@/components";


const anton = Anton({subsets: ["latin"], weight: "400", variable: "--font-anton"});
const roboto = Roboto({subsets: ["latin"], weight: ["100", "400", "700"], variable: "--font-roboto"});
const oldStandardTT = Old_Standard_TT({subsets: ["latin"], weight: ["400", "400"], variable: "--font-oldstandard"});
const pochaevsk = Pochaevsk({subsets: ["latin"], weight: ["400", "400"], variable: "--font-pochaevsk"});

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "News Today",
    description: "Latest breaking news, updates, and top stories from around the world, delivered in real time",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html className={`${anton.variable} ${roboto.variable} ${oldStandardTT.variable} ${pochaevsk.variable}`} lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AppProviders>
            <GlobalStyle/>
            <Header/>
            <Container>
                {children}
            </Container>
        </AppProviders>
        </body>
        </html>
    );
}
