"use client"

import React, { useEffect, useState } from 'react'
import style from "./bottomLogo.module.scss"

interface BottomLogoProps {
    theme: 'light' | 'dark';
}

function BottomLogo({ theme }: BottomLogoProps) {
	const spanText = ["scourse", "scussion", "alogue", "sputation", "squisition"];
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex(prevIndex => (prevIndex + 1) % spanText.length);
		}, 6000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className={style.bottomLogo} >
			{theme === 'light' && (
				<div className={style.bottomLogo__bottomLogoLight}>
					<p>Free<span>Di</span><span className={style.bottomLogo__bottomLogoLight__span}>{spanText[index]}</span></p>
				</div>
			)}
			{theme === 'dark' && (
				<div className={style.bottomLogo__bottomLogoDark}>
					<p>Free<span>Di</span><span className={style.bottomLogo__bottomLogoDark__span}>{spanText[index]}</span></p>
				</div>
			)}
		</div>
	);
}

export default BottomLogo