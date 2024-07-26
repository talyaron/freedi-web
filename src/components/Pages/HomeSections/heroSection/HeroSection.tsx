"use client";

import React from "react";
import Image from "next/image";
import "./heroSectionStyle.scss";

//Custom Images
import heroSectionImg from "@/assets/Images/HeroSectionImg.png";

//Custom ComponentsContactPhoneBlueIcon";
import RunningBanner from "./RunningBanner";
import CallUs from "./CallUs";
import useWindowSize from "@/hooks/useWindowSize";

function HeroSection({
	currentLang,
}: Readonly<{
	currentLang: Record<string, string>;
}>) {
	const { lgScreen } = useWindowSize();

	return (
		<div className="heroSection">
			<div className="heroSection__header">
				<h1 className="sectionHeader">
					{currentLang["Genuine Agreement via Deliberation"]}
				</h1>
				<p className="sectionText">
					{currentLang["Building Bonds and Bridging Divides"]}
				</p>
				{lgScreen && <CallUs currentLang={currentLang} />}
			</div>
			<Image
				className="heroSectionImg"
				src={heroSectionImg}
				alt="Hero Section"
				quality={100}
				priority={true}
			/>
			{!lgScreen && <CallUs currentLang={currentLang} />}
			{/* <RunningBanner currentLang={currentLang} /> */}
		</div>
	);
}

export default HeroSection;
