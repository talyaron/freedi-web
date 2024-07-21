"use client";

import React from "react";
import Image from "next/image";
import style from "./heroSectionStyle.module.scss";

//Custom Images
import heroSectionImg from "@/assets/Images/HeroSectionImg.png";

//Custom Components
import ArrowDownIcon2 from "@/components/icons/ArrowDownIcon2";
import ContactPhoneBlueIcon from "@/components/icons/ContactPhoneBlueIcon";
import RunningBanner from "./RunningBanner";
import useWindowSize from "@/hooks/useWindowSizeFixed";

function HeroSection({
	currentLang,
}: Readonly<{
	currentLang: Record<string, string>;
}>) {
	const { width } = useWindowSize();
	if (width === undefined) {
		return <div className={style.heroSection}> </div>;
	}

	return (
		<div className={style.heroSection}>
			<div className={style.heroSection__centerArea}>
				<div className={style.heroSection__centerArea__leftSideContent}>
					<div
						className={
							style.heroSection__centerArea__leftSideContent__title
						}
					>
						<h1>
							{currentLang["Genuine Agreement via Deliberation"]}
						</h1>
						<p>
							{currentLang["Building Bonds and Bridging Divides"]}
						</p>
					</div>
					<div
						className={
							style.heroSection__centerArea__leftSideContent__icons
						}
					>
						<ArrowDownIcon2 />
						<div
							className={
								style.heroSection__centerArea__leftSideContent__icons__phone
							}
						>
							<ContactPhoneBlueIcon />
							<div
								className={
									style.heroSection__centerArea__leftSideContent__icons__phone__text
								}
							>
								<p>{currentLang["Call us"]}</p>
								<p>{currentLang["+972-52-607-9419"]}</p>
							</div>
						</div>
					</div>
				</div>
				<Image
					className={style.heroSectionImg}
					src={heroSectionImg}
					alt="Hero Section"
					layout="fill"
					objectFit="cover"
					objectPosition="center"
					quality={100}
					priority={true}
					width={width / 2}
				/>
			</div>
			<div className={style.heroSection__runningBanner}>
				<RunningBanner currentLang={currentLang} />
			</div>
		</div>
	);
}

export default HeroSection;
