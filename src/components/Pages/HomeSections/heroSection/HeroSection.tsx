'use client'

import React from 'react'
import Image from 'next/image'
import style from "./heroSectionStyle.module.scss"


//Custom Images
import heroSectionImg from "@/assets/Images/HeroSectionImg.png"

//Custom Components
import ArrowDownIcon2 from '@/components/icons/ArrowDownIcon2'
import ContactPhoneBlueIcon from '@/components/icons/ContactPhoneBlueIcon'
import RunningBanner from './RunningBanner'
import useWindowSizeFixed from '@/hooks/useWindowSizeFixed'

function HeroSection({
	currentLang,
	direction,
}: Readonly<{
	currentLang: Record<string, string>;
	direction: "rtl" | "ltr";
}>) {
	const { width } = useWindowSizeFixed();
	if (width === undefined) {
		return <div className={style.heroSection} style={{ direction }}> </div>
	}

	return (
		<div className={style.heroSection} style={{ direction }}>
			{width > 1024 ? (
				<>
					<div className={style.heroSection__centerArea}>
						<div className={style.heroSection__centerArea__leftSideContent}>
							<div className={style.heroSection__centerArea__leftSideContent__title}>
								<h1>{currentLang["Genuine Agreement via Deliberation"]}</h1>
								<p>{currentLang["Building Bonds and Bridging Divides"]}</p>
							</div>
							<div className={style.heroSection__centerArea__leftSideContent__icons}>
								<ArrowDownIcon2 />
								<div className={style.heroSection__centerArea__leftSideContent__icons__phone}>
									<ContactPhoneBlueIcon />
									<div className={style.heroSection__centerArea__leftSideContent__icons__phone__text}>
										<p>{currentLang["Call us"]}</p>
										<p>{currentLang["+972-52-607-9419"]}</p>
									</div>
								</div>
							</div>
						</div>
						<div className={style.heroSection__centerArea__rightSideContent}>
							<Image className={style.heroSectionImg} src={heroSectionImg} alt="Hero Section" />
						</div>
					</div>
					<div className={style.heroSection__runningBanner}>
						<RunningBanner currentLang={currentLang} />
					</div>
				</>
			) : (
				<>
					<div className={style.heroSection__centerArea}>
						<div className={style.heroSection__centerArea__leftSideContent}>
							<div className={style.heroSection__centerArea__leftSideContent__title}>
								<h1>{currentLang["Genuine Agreement via Deliberation"]}</h1>
								<p>{currentLang["Building Bonds and Bridging Divides"]}</p>
							</div>
						</div>
						<div className={style.heroSection__centerArea__rightSideContent}>
							<Image className={style.heroSectionImg} src={heroSectionImg} alt="Hero Section" />
						</div>
						<div className={style.heroSection__centerArea__bottomContent}>
							<ArrowDownIcon2 />
							<ContactPhoneBlueIcon />
							<div className={style.heroSection__centerArea__bottomContent__phone}>
								<div className={style.heroSection__centerArea__bottomContent__phone__text}>
									<p>{currentLang["Call us"]}</p>
									<p>{currentLang["+972-52-607-9419"]}</p>
								</div>
							</div>
						</div>
					</div>
					<div className={style.heroSection__runningBanner}>
						<RunningBanner currentLang={currentLang} />
					</div>
				</>
			)}
		</div >
	)
}

export default HeroSection