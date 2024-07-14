"use client"

import style from "./whoAreWeSectionStyle.module.scss"
import React from 'react'
import Image from 'next/image';

//Custom imgs
import whoAreWeImg from "@/assets/Images/WhoAreWe.png"
import geometryImg from "@/assets/Images/geometryTop.png"
import geometryImg2 from "@/assets/Images/geometryImg2.png"
import useWindowSize from "@/hooks/useWindowSize";

function WhoAreWeSection() {
	const { width } = useWindowSize();

	return (
		<div className={style.whoAreWe}>
			<div className={style.whoAreWe__leftSection}>

				<div className={style.whoAreWe__leftSection__top}>
					<div className={style.whoAreWe__leftSection__top__title}>Who are we?</div>
					<div className={style.whoAreWe__leftSection__top__description}>Empowering Collaborative Decision-Making Through Digital Deliberation</div>
				</div>

				<div className={style.whoAreWe__leftSection__bottom}>
					<div className={style.whoAreWe__leftSection__bottom__imgArea}>
						{width > 576 ? (
							<Image
								className={style.whoAreWe__leftSection__bottom__imgArea__geometryImg}
								src={geometryImg}
								alt="Geometry Img"
							/>
						) : <Image
							className={style.whoAreWe__leftSection__bottom__imgArea__geometryImg2}
							src={geometryImg2}
							alt="Geometry Img2"
						/>}
					</div>
					<div className={style.whoAreWe__leftSection__bottom__paragraph}>
						<p>In today's polarized world, finding common ground can feel like an uphill battle. But we believe that through open and inclusive dialogue, even the toughest issues have solutions.</p>
						<p>That's why we created <span className={style.free}>Free</span><span className={style.di}>Di</span>  - a user-friendly platform that brings the principles of deliberative democracy into the digital age. Our app provides a virtual space where diverse groups can gather, share perspectives, weigh evidence, and engage in reasoned debate.</p>
						<p>The end goal? Fostering mutual understanding and crafting fair, well-informed agreements on the complex matters that impact us all.</p>
						<p>Step into the <span className={style.free}>Free</span><span className={style.di}>Di</span> experience and help bridge divides through the power of deliberation!</p>
					</div>
				</div>
			</div>

			<div className={style.whoAreWe__rightSection}>
				<Image
					className={style.whoAreWe__rightSection__img}
					src={whoAreWeImg}
					alt="Who Are We"
				/>
			</div>
		</div>
	)
}

export default WhoAreWeSection