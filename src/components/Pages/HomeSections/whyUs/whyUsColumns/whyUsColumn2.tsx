import React from "react";
import { secondConnectionCards } from "../whyUsCardsData";
import WhyUsCard from "../WhyUsCard";



const whyUsColumn2 = () => {
    return (
        <>
            <div className="whyUs__cardSection__carouselWrapper__carousel__vertical whyUs__cardSection__carouselWrapper__carousel__secondVertical">
                {secondConnectionCards.map((card, index) => {
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
        </>
    );
};

export default whyUsColumn2;
