import React, { useContext } from "react";
import { LangContext } from "./WhyUsSection";
import { CardModel } from "./whyUsModel";



const WhyUsCard = ({ title, description, img: SvgImage}: CardModel) => {
    const context = useContext(LangContext);
    if(!context) {
        throw new Error('Lang or inSection cannot be undefined!');
    }
    
    const {currentLang, inSection} = context;

    return (
        <div className={inSection ? 'cardWrapper whyUsActive__cardWrapper' : 'cardWrapper'}>
            {SvgImage}
            <div className="cardWrapper__card">
                <h1 className={inSection ? 'cardWrapper--title whyUsActive--title' : 'cardWrapper--title'}>{title}</h1>
                <p className={inSection ? 'cardWrapper--description whyUsActive--description' : 'cardWrapper--description'}>{description}</p>
            </div>
        </div>
    );
};

export default WhyUsCard;
