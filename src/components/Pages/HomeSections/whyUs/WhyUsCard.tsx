import React, { useContext } from "react";
import { LangContext } from "./WhyUsSection";
import { CardModel } from "./whyUsModel";
import style from "./whyUsStyle.module.scss";

const WhyUsCard = ({ title, description, img: SvgImage }: CardModel) => {
	const context = useContext(LangContext);
	if (!context) {
		throw new Error('Lang or inSection cannot be undefined!');
	}
    
	const { currentLang, isVisible } = context;

	return (
		<div className={`${style.cardWrapper} ${isVisible ? style.whyUsActive__cardWrapper : ''}`}>
			{SvgImage}
			<div className={style.cardWrapper__card}>
				<h1 className={`${style['cardWrapper--title']} ${isVisible ? style['whyUsActive--title'] : ''}`}>
					{currentLang[title]}
				</h1>
				<p className={`${style['cardWrapper--description']} ${isVisible ? style['whyUsActive--description'] : ''}`}>
					{currentLang[description]}
				</p>
			</div>
		</div>
	);
};

export default WhyUsCard;
