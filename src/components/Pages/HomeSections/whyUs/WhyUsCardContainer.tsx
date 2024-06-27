import React, { useContext, useState } from "react";
import WhyUsColumn1 from "./whyUsColumns/whyUsColumn1";
import WhyUsColumn2 from "./whyUsColumns/whyUsColumn2";
import WhyUsColumn3 from "./whyUsColumns/whyUsColumn3";
import useWindowSizeFixed from "@/hooks/useWindowSizeFixed";
import { LangContext } from "./WhyUsSection";


const WhyUsCardContainer = () => {

    const { width } = useWindowSizeFixed();

    const context = useContext(LangContext);
    if(!context) {
        throw new Error('Lang or inSection cannot be undefined!');
    }
    
    const {itemRef} = context;

    return (
        <div className="whyUs__cardSection">
            <div className="whyUs__cardSection__carouselWrapper" ref={itemRef}>
                {width! >= 1024 ? (
                    <>
                        <div className="whyUs__cardSection__carouselWrapper__carousel">
                            <WhyUsColumn1 />
                            <WhyUsColumn1 />
                        </div>
                        <div className="whyUs__cardSection__carouselWrapper__carousel">
                            <WhyUsColumn2 />
                            <WhyUsColumn2 />
                        </div>
                        <div className="whyUs__cardSection__carouselWrapper__carousel">
                            <WhyUsColumn3 />
                            <WhyUsColumn3 />
                        </div>
                    </>
                ) : width! >= 576 && width! < 1024 ? (
                    <>
                        <div className="whyUs__cardSection__carouselWrapper__carousel animationUp">
                            <WhyUsColumn1 />
                            <WhyUsColumn2 />
                            <WhyUsColumn3 />
                            <WhyUsColumn1 />
                        </div>
                        <div className="whyUs__cardSection__carouselWrapper__carousel animationDown">
                            <WhyUsColumn3 />
                            <WhyUsColumn2 />
                            <WhyUsColumn1 />
                            <WhyUsColumn3 />
                        </div>
                    </>
                ) : width! <= 576 ? (
                    <>
                        <div className="whyUs__cardSection__carouselWrapper__carousel">
                            <WhyUsColumn1 />
                            <WhyUsColumn2 />
                            <WhyUsColumn3 />
                            <WhyUsColumn1 />
                        </div>
                    </>
                ) : null}
            </div>
        </div>
    );
};

export default WhyUsCardContainer;
