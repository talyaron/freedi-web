"use client";

import Image from "next/image";
import React from "react";

// Images
import heroImg from "@/assets/Images/Hero illustration.png";

import style from "./welcomeHeaderStyle.module.scss";
import { English, Hebrew } from "@/types/language";

export default function Header({
	currentLang,
}: Readonly<{
    currentLang: English | Hebrew;
}>) {
	return (
		<header className={style.welcomeHeader}>
			<div className={style.heroTitle}>
				<h2 className={style.heading}>
					{currentLang["Freedi fosters community well-being"]}
				</h2>
				<p className={style.paragraph}>
					{currentLang["Reaching Decisions Collaboratively"]}
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
			<ul className={style.welcomeHeader__nav}>
				<li>{currentLang["About"]}</li>
				<li>{currentLang["Features"]}</li>
				<li>{currentLang["Feedbacks"]}</li>
			</ul>
		</header>
	);
}
