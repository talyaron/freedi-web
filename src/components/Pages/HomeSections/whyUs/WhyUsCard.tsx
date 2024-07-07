import React, { useContext } from "react";
import { LangContext } from "./WhyUsSection";
import { CardModel } from "./whyUsModel";



const WhyUsCard = ({ title, description, img: SvgImage}: CardModel) => {
    const context = useContext(LangContext);
    if(!context) {
        throw new Error('Lang or inSection cannot be undefined!');
    }
    
    const {currentLang, isVisible} = context;

    return (
        <div className={isVisible ? 'cardWrapper whyUsActive__cardWrapper' : 'cardWrapper'}>
            {SvgImage}
            <div className="cardWrapper__card">
                <h1 className={isVisible ? 'cardWrapper--title whyUsActive--title' : 'cardWrapper--title'}>{currentLang[title]}</h1>
                <p className={isVisible ? 'cardWrapper--description whyUsActive--description' : 'cardWrapper--description'}>{currentLang[description]}</p>
            </div>
        </div>
    );
};

export default WhyUsCard;
