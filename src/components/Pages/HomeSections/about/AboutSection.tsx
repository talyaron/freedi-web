import React from "react";
import Image from "next/image";

import style from "./AboutSectionStyle.module.scss";

// Images
import overview from "@/assets/Images/Overview.png";
import bubble from "@/assets/Images/bubble.png";
import DefaultButton from "../../../buttons/DefaultButton";

export default function AboutSection({
	currentLang,
	direction,
}: Readonly<{
    currentLang: Record<string, string>;
    direction: "rtl" | "ltr";
}>) {
	return (
		<section className={style.aboutSection}>
			<div className={style.aboutSection__imageWrapper}>
				<Image
					alt="bubble-image"
					src={bubble}
					quality={100}
					className={`${style.aboutSection__imageWrapper__bubble} ${style.first}`}
				/>
				<Image
					alt="bubble-image"
					src={bubble}
					quality={100}
					className={`${style.aboutSection__imageWrapper__bubble} ${style.second}`}
				/>
				<Image
					alt="bubble-image"
					src={bubble}
					quality={100}
					className={`${style.aboutSection__imageWrapper__bubble} ${style.third}`}
				/>
				<Image
					alt="overview-image"
					src={overview}
					quality={100}
					className={style.aboutSection__imageWrapper__image}
				/>
			</div>
			<div className={style.aboutSection__info} style={{ direction }}>
				<h3 className={style.aboutSection__info__title}>
					{currentLang["About Freedi"]}
				</h3>
				<p className={style.aboutSection__info__text}>
					{
						currentLang[
							"The goal of Freedi app is to go beyond simple majority rule votes by facilitating informed deliberation, finding common ground, and working towards decisions that incorporate diverse viewpoints and address minority concerns when possible."
						]
					}
				</p>
				<DefaultButton
					type="primary"
					text={currentLang["Talk to Us"]}
				/>
			</div>
		</section>
	);
}
