import React from "react";

import Image from "next/image";

// Custom Components
import AboutSection from "./components/HomeSections/about/AboutSection";
import WelcomeHeader from "./components/HomeSections/header/WelcomeHeader";
import FeatureSection from "./components/HomeSections/features/FeatureSection";

// import Images
import heroBg from "@/assets/Images/Hero BG illustrations.png";

export default function Home() {
    return (
        <main>
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
        </main>
    );
}
