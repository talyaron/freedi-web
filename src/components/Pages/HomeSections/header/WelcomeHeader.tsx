"use client";

import Image from "next/image";
import React from "react";

// Images
import heroImg from "@/assets/Images/Hero illustration.png";

import "./welcomeHeaderStyle.scss";
import { English, Hebrew } from "@/types/language";

export default function Header({
    currentLang,
}: Readonly<{
    currentLang: English | Hebrew;
}>) {
    return (
        <header className="welcomeHeader">
            <div className="heroTitle">
                <h2 className="heading">
                    {currentLang["Freedi fosters community well-being"]}
                </h2>
                <p className="paragraph">
                    {currentLang["Building Bonds and Bridging Divides"]}
                </p>
            </div>
            <Image
                alt="Hero-Image"
                src={heroImg}
                quality={100}
                loading="eager"
                unoptimized
                loader={({ src }) => src}
                sizes="50vw"
                style={{
                    width: "50vw",
                    maxWidth: "800px",
                    height: "auto",
                    marginTop: "1vw",
                }}
            />
            <ul className="welcomeHeader__nav">
                <li>{currentLang["About"]}</li>
                <li>{currentLang["Features"]}</li>
                <li>{currentLang["Feedbacks"]}</li>
            </ul>
        </header>
    );
}
