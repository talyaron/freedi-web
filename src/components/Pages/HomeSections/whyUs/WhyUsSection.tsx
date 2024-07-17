"use client";

import React, { useEffect, createContext, useRef, useMemo } from "react";
import style from "./whyUsStyle.module.scss";

import WhyUsCardContainer from "./WhyUsCardContainer";
import { LangType } from "./whyUsModel";
import { useIsVisible } from "@/hooks/useIsVisible";
import BottomLogo from "@/components/bottomLogo/BottomLogo";
export const LangContext = createContext<LangType | undefined>(undefined);

const WhyUsSection = ({
	currentLang,
	direction,
}: Readonly<{
	currentLang: Record<string, string>;
	direction: "rtl" | "ltr";
}>) => {

	const ref = useRef<HTMLDivElement>(null);
	const isVisible = useIsVisible(ref, 0.3);

	useEffect(() => {
		const body = document.querySelector(".main") as HTMLElement;
		if (isVisible) {
			body.classList.add(style.whyUsActive__main);
		} else {
			body.classList.remove(style.whyUsActive__main);
		}
	}, [isVisible]);

	const contextValue = useMemo(() => ({ currentLang, isVisible, itemRef: ref }), [currentLang, isVisible]);

	return (
		<LangContext.Provider value={contextValue}>
			<section
				className={isVisible ? `${style.whyUs} ${style.whyUsActive}` : style.whyUs}
				style={{ direction }}
			>
				<h1
					className={
						isVisible
							? `${style["whyUs--title"]} ${style["whyUsActive--title"]}`
							: style["whyUs--title"]
					}
				>
					{currentLang["Why Freedi?"]}
				</h1>
				<WhyUsCardContainer />
			</section>
			{/* <div className={style.freediLogo}>
				<BottomLogo theme={"dark"} />
			</div> */}
		</LangContext.Provider>

	);
};

export default WhyUsSection;
