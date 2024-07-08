import React from "react";
import { firstConnectionCards } from "../whyUsCardsData";
import WhyUsCard from "../WhyUsCard";
import style from "../whyUsStyle.module.scss";

const WhyUsColumn1 = () => {
    return (
        <div className={`${style.whyUs__cardSection__carouselWrapper} ${style.whyUs__cardSection__carouselWrapper__carousel__vertical} ${style.whyUs__cardSection__carouselWrapper__carousel__firstVertical}`}>
            {firstConnectionCards.map((card, index) => (
                <WhyUsCard
                    key={index}
                    title={card.title}
                    description={card.description}
                    img={card.img}
                />
            ))}
        </div>
    );
};

export default WhyUsColumn1;
