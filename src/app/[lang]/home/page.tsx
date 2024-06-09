import React from "react";

import Image from "next/image";

// Styles
import "./home.scss";

// import Images
import heroBg from "@/assets/Images/Hero-Background.png";

// Custom Components
import AboutSection from "@/components/Pages/HomeSections/about/AboutSection";
import WelcomeHeader from "@/components/Pages/HomeSections/header/WelcomeHeader";
import FeatureSection from "@/components/Pages/HomeSections/features/FeatureSection";
import ConnectionsSection from "@/components/Pages/HomeSections/connections/ConnectionsSection";
import VideoSection from "@/components/Pages/HomeSections/videoSection/VideoSection";
import ClientFeedbackSection from "@/components/Pages/HomeSections/feedback/ClientFeedbackSection";
import AccessTodaySection from "@/components/Pages/HomeSections/join-today/AccessTodaySection";
import TeamworkSection from "@/components/Pages/HomeSections/teamwork/TeamworkSection";
import HomeFooter from "@/components/Pages/HomeSections/footer/HomeFooter";

// Helpers
import { getLanguageData } from "@/helpers/languages";

export default async function Home({
    params,
}: Readonly<{
    params: { lang: "he" | "en" | "ar" };
}>) {
    const langs = await getLanguageData();

    const currentLang = langs[params.lang];

    const direction = params.lang === "he" ? "rtl" : "ltr";

    return (
        <main className="main">
            <Image
                alt="Hero-Background"
                src={heroBg}
                loading="eager"
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

            <WelcomeHeader currentLang={currentLang} />

            <AboutSection currentLang={currentLang} direction={direction} />

            <FeatureSection currentLang={currentLang} direction={direction} />

            <ConnectionsSection
                currentLang={currentLang}
                direction={direction}
            />

            <VideoSection currentLang={currentLang} />

            <ClientFeedbackSection />

            <AccessTodaySection
                currentLang={currentLang}
                direction={direction}
            />

            <TeamworkSection currentLang={currentLang} direction={direction} />

            <HomeFooter />
        </main>
    );
}
