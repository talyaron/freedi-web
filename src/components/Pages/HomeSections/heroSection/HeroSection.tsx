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
		<>
			<section className="heroSection">
				<div className="heroSection__header">
					<h1 className="sectionHeader">
						{currentLang["Genuine Agreement via Deliberation"]}
					</h1>
					<p className="sectionText">
						{currentLang["Building Bonds and Bridging Divides"]}
					</p>
					{lgScreen && <CallUs currentLang={currentLang} />}
				</div>
				<div className="heroSection__imageBox">
					<Image
						className="heroSectionImg"
						src={heroSectionImg}
						alt="Hero Section"
						quality={100}
						priority={true}
					/>
					{!lgScreen && <CallUs currentLang={currentLang} />}
				</div>
			</section>
			<RunningBanner currentLang={currentLang} />
		</>
	);
}

export default HeroSection;
