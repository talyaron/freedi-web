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
import VideoSection from "@/components/Pages/HomeSections/videoSection/VideoSection";
import ClientFeedbackSection from "@/components/Pages/HomeSections/feedback/ClientFeedbackSection";
import AccessTodaySection from "@/components/Pages/HomeSections/join-today/AccessTodaySection";
import TeamworkSection from "@/components/Pages/HomeSections/teamwork/TeamworkSection";
import HomeFooter from "@/components/Pages/HomeSections/footer/HomeFooter";
import HeroSection from "@/components/Pages/HomeSections/heroSection/HeroSection";

// Helpers
import { getLanguageData } from "@/helpers/languages";
import BenefitsSection from "@/components/Pages/HomeSections/benefits/BenefitsSection";
import WhyUsSection from "@/components/Pages/HomeSections/whyUs/WhyUsSection";


export default async function Home({
    params,
}: Readonly<{
    params: { lang: "he" | "en" | "ar" };
}>) {
    const langs = await getLanguageData();

    const currentLang = langs[params.lang] || "en";

    const direction =
        params.lang === "he" || params.lang === "ar" ? "rtl" : "ltr";

    const isHebrew = params.lang === "he";

    return (
        <main className={isHebrew ? "main he" : "main en"}>
            <Image
                alt="Hero-Background"
                src={heroBg}
                loading="eager"
                priority
                style={{
                    width: "100%",
                    height: "20rem",
                    position: "absolute",
                    top: 0,
                    zIndex: -10,
                }}
            />
            <WelcomeHeader currentLang={currentLang} />

            <div className="main__body">
                <AboutSection currentLang={currentLang} direction={direction} />

                <BenefitsSection currentLang={currentLang} />

                <FeatureSection
                    currentLang={currentLang}
                    direction={direction}
                />

                <WhyUsSection
                    currentLang={currentLang}
                    direction={direction}
                />

                <VideoSection currentLang={currentLang} direction={direction}/>

                <ClientFeedbackSection />

                <AccessTodaySection
                    currentLang={currentLang}
                    direction={direction}
                />

                <TeamworkSection
                    currentLang={currentLang}
                    direction={direction}
                />
            </div>

            <HeroSection
                currentLang={currentLang}
                direction={direction} />

            <HomeFooter
                currentLang={currentLang}
                direction={direction}
            />
        </main>
    );
}
