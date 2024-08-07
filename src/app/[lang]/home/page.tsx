import React from "react";

// Styles
import "./home.scss";

// Custom Components
import VideoSection from "@/components/Pages/HomeSections/videoSection/VideoSection";
import HomeFooter from "@/components/Pages/HomeSections/footer/HomeFooter";
import HeroSection from "@/components/Pages/HomeSections/heroSection/HeroSection";
import WhoAreWeSection from "@/components/Pages/HomeSections/whoAreWeSection/WhoAreWeSection";
import WhyUsSection from "@/components/Pages/HomeSections/whyUs/WhyUsSection";
import FeaturesSection from "@/components/Pages/HomeSections/featuresSection/FeaturesSection";

// Helpers
import { getLanguageData } from "@/helpers/languages";

export default async function Home({
	params,
}: Readonly<{
	params: { lang: "he" | "en" | "ar" };
}>) {
	const langs = await getLanguageData();

	const currentLang = langs[params.lang];

	const direction =
		params.lang === "he" || params.lang === "ar" ? "rtl" : "ltr";

	const isHebrew = params.lang === "he";

	return (
		<main
			className={isHebrew ? "main he" : "main en"}
			style={{ direction }}
		>
			<div className="main__body">
				<HeroSection currentLang={currentLang} direction={direction}/>

				<WhoAreWeSection currentLang={currentLang} />

				<WhyUsSection currentLang={currentLang} />

				<VideoSection currentLang={currentLang} />

				<FeaturesSection
					currentLang={currentLang}
					direction={direction}
				/>
			</div>

			<HomeFooter currentLang={currentLang} />
		</main>
	);
}
