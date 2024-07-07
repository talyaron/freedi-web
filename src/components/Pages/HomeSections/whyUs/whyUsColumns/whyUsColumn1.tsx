import React from "react";
import { firstConnectionCards } from "../whyUsCardsData";
import WhyUsCard from "../WhyUsCard";




const whyUsColumn1 = () => {
    
    return (
            <div className="whyUs__cardSection__carouselWrapper__carousel__vertical whyUs__cardSection__carouselWrapper__carousel__firstVertical">
                {firstConnectionCards.map((card, index) => {
                    return(
                    <WhyUsCard
                        title={card.title}
                        description={card.description}
                        key={index}
                        img={card.img}
                    />)
                })}
            </div>
    );
};

export default whyUsColumn1;
