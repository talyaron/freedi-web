"use client";

import React, { useEffect, createContext, useRef, useMemo } from "react";
import style from "./whyUsStyle.module.scss";

import WhyUsCardContainer from "./WhyUsCardContainer";
import { LangType } from "./whyUsModel";
import { useIsVisible } from "@/hooks/useIsVisible";

//Custom components
import BottomLogo from "@/components/bottomLogo/BottomLogo";

export const LangContext = createContext<LangType | undefined>(undefined);

const WhyUsSection = ({
	currentLang,
}: Readonly<{
	currentLang: Record<string, string>;
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

	const contextValue = useMemo(
		() => ({ currentLang, isVisible, itemRef: ref }),
		[currentLang, isVisible],
	);

	return (
		<LangContext.Provider value={contextValue}>
			<section
				className={
					isVisible
						? `${style.whyUs} ${style.whyUsActive}`
						: style.whyUs
				}
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
				<BottomLogo theme={"dark"} />
			</section>
		</LangContext.Provider>
	);
};

export default WhyUsSection;
