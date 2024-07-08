import React, { useContext } from "react";
import WhyUsColumn1 from "./whyUsColumns/whyUsColumn1";
import WhyUsColumn2 from "./whyUsColumns/whyUsColumn2";
import WhyUsColumn3 from "./whyUsColumns/whyUsColumn3";
import useWindowSizeFixed from "@/hooks/useWindowSizeFixed";
import { LangContext } from "./WhyUsSection";
import style from "./whyUsStyle.module.scss";

const WhyUsCardContainer = () => {

    const { width } = useWindowSizeFixed();
    const isSmallScreen = width! < 576;
    const isMediumScreen = width! >= 576 && width! < 1024;
    const isLargeScreen = width! >= 1024;
    const context = useContext(LangContext);
    if(!context) {
        throw new Error('Lang or inSection cannot be undefined!');
    }
    
    const {itemRef} = context;

    return (
        <div className={style.whyUs__cardSection}>
            <div className={style.whyUs__cardSection__carouselWrapper} ref={itemRef}>
                {isLargeScreen && (
                    <>
                        <div className={`${style.whyUs__cardSection__carouselWrapper__carousel}`}>
                            <WhyUsColumn1 />
                            <WhyUsColumn1 />
                        </div>
                        <div className={`${style.whyUs__cardSection__carouselWrapper__carousel}`}>
                            <WhyUsColumn2 />
                            <WhyUsColumn2 />
                        </div>
                        <div className={`${style.whyUs__cardSection__carouselWrapper__carousel}`}>
                            <WhyUsColumn3 />
                            <WhyUsColumn3 />
                        </div>
                    </>
                )}
                {isMediumScreen && (
                    <>
                        <div className={`${style.whyUs__cardSection__carouselWrapper__carousel} ${style.animationUp}`}>
                            <WhyUsColumn1 />
                            <WhyUsColumn2 />
                            <WhyUsColumn3 />
                            <WhyUsColumn1 />
                        </div>
                        <div className={`${style.whyUs__cardSection__carouselWrapper__carousel} ${style.animationDown}`}>
                            <WhyUsColumn3 />
                            <WhyUsColumn2 />
                            <WhyUsColumn1 />
                            <WhyUsColumn3 />
                        </div>
                    </>
                )}
                {isSmallScreen && (
                    <div className={`${style.whyUs__cardSection__carouselWrapper__carousel}`}>
                        <WhyUsColumn1 />
                        <WhyUsColumn2 />
                        <WhyUsColumn3 />
                        <WhyUsColumn1 />
                    </div>
                )}
            </div>
        </div>
    );
};

export default WhyUsCardContainer;
