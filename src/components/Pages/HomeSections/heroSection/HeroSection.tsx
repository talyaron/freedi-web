import React from 'react'
import Image from 'next/image'
import style from "./heroSectionStyle.module.scss"


//Custom Images
import heroSectionImg from "@/assets/Images/HeroSectionImg.png"

//Custom Components
import ArrowDownIcon2 from '@/components/icons/ArrowDownIcon2'
import ContactPhoneBlueIcon from '@/components/icons/ContactPhoneBlueIcon'
import RunningBanner from './RunningBanner'

function HeroSection() {
	return (
		<div className={style.heroSection}>
			<div className={style.heroSection__centerArea}>
				<div className={style.heroSection__centerArea__leftSideContent}>
					<div className={style.heroSection__centerArea__leftSideContent__title}>
						<h1>Genuine Agreement via Deliberation</h1>
						<p>Building Bonds and Bridging Divides</p>
					</div>
					<div className={style.heroSection__centerArea__leftSideContent__icons}>
						<ArrowDownIcon2 />
						<div className={style.heroSection__centerArea__leftSideContent__icons__phone}>
							<ContactPhoneBlueIcon />
							<div className={style.heroSection__centerArea__leftSideContent__icons__phone__text}>
								<p>Call us</p>
								<p>+972-52-607-9419</p>
							</div>
						</div>
					</div>
				</div>
				<div className={style.heroSection__centerArea__rightSideContent}>
					<Image className={style.heroSectionImg} src={heroSectionImg} alt="Hero Section" />
				</div>
			</div>
			<div className={style.heroSection__runningBanner}>
				<RunningBanner />
			</div>
		</div>
	)
}

export default HeroSection