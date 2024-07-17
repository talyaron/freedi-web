import React from "react";
import { firstConnectionCards } from "../whyUsCardsData";
import WhyUsCard from "../WhyUsCard";
import style from "../whyUsStyle.module.scss";

const whyUsColumn1 = () => {
	return (
		<div className={`${style.whyUs__cardSection__carouselWrapper__carousel__vertical} ${style.whyUs__cardSection__carouselWrapper__carousel__firstVertical}`}>
			{firstConnectionCards.map((card, index) => {
				return (
					<WhyUsCard
						title={card.title}
						description={card.description}
						key={index}
						img={card.img}
					/>
				);
			})}
		</div>
	);
};

export default whyUsColumn1;
