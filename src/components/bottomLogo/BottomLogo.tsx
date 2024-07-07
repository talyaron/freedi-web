"use client"

import React, { useEffect, useState } from 'react'
import style from "./bottomLogo.module.scss"

function BottomLogo() {
    const spanText = ["scourse", "scussion", "alogue", "sputation", "squisition"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % spanText.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={style.bottomLogo}>
            <div className={style.bottomLogo__bottomLogoLight}>
                <p>Free<span>Di</span><span>{spanText[index]}</span></p>
            </div>
            <div className={style.bottomLogo__bottomLogoDark}>
                <p>Free<span>Di</span><span>{spanText[index]}</span></p>
            </div>
        </div>
    );
}

export default BottomLogo