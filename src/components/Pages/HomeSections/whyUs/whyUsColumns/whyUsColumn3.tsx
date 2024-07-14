import React from "react";
import { thirdConnectionCards } from "../whyUsCardsData";
import WhyUsCard from "../WhyUsCard";
import style from "../whyUsStyle.module.scss";

const whyUsColumn3 = () => {
	return (
		<div className={`${style.whyUs__cardSection__carouselWrapper__carousel__vertical} ${style.whyUs__cardSection__carouselWrapper__carousel__thirdVertical}`}>
			{thirdConnectionCards.map((card, index) => {
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

export default whyUsColumn3;
