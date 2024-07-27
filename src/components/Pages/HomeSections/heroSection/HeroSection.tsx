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
	direction,
}: Readonly<{
	currentLang: Record<string, string>;
	direction: "rtl" | "ltr";
}>) {
	const { lgScreen } = useWindowSize();

	return (
		<>
			<section className="heroSectionWrapper">
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
				</div>
				<RunningBanner
					currentLang={currentLang}
					direction={direction}
				/>
			</section>
		</>
	);
}

export default HeroSection;
