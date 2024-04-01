"use client";

import React from "react";

import Image from "next/image";

// Styles
import "./mainStyle.scss";

// import Images
import heroBg from "@/assets/Images/Hero BG illustrations.png";

// Custom Components
import AboutSection from "../components/HomeSections/about/AboutSection";
import WelcomeHeader from "../components/HomeSections/header/WelcomeHeader";
import FeatureSection from "../components/HomeSections/features/FeatureSection";
import ConnectionsSection from "../components/HomeSections/connections/ConnectionsSection";
import VideoSection from "@/components/HomeSections/videoSection/VideoSection";

export default function Home() {
    return (
        <main className="main">
            <Image
                alt="Hero-Background"
                src={heroBg}
                quality={100}
                placeholder="blur"
                sizes="100vw"
                priority
                style={{
                    width: "100%",
                    height: "auto",
                    position: "absolute",
                    top: 0,
                    zIndex: -10,
                }}
            />

            <WelcomeHeader />

            <AboutSection />

            <FeatureSection />

            <ConnectionsSection />

            <VideoSection />

            
            <div></div>
        </main>
    );
}
