"use client";

import React, { useState } from "react";
import styles from "./featuresSection.module.scss";

// Custom Components
import Accordion from "@/components/accordion/Accordion";
import { accordionData } from "@/components/accordion/data/accordionData";
import ImageSlider from "@/components/imageSlider/ImageSlider";
import BottomLogo from "@/components/bottomLogo/BottomLogo";

export default function FeaturesSection({
	currentLang,
	direction,
}: Readonly<{
	currentLang: Record<string, string>;
	direction: "rtl" | "ltr";
}>) {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const handleAccordionToggle = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section className={styles.wrapper}>
			<h1 className="sectionHeader">{currentLang["Our Features"]}</h1>
			<div className={styles.wrapper__features}>
				<div className={styles.wrapper__features__main}>
					{accordionData.map((feature, index) => {
						return (
							<Accordion
								feature={feature}
								key={index}
								isOpen={openIndex === index}
								setAccordionOpen={() =>
									handleAccordionToggle(index)
								}
								currentLang={currentLang}
							/>
						);
					})}
				</div>
				<div className={styles.wrapper__features__imageSlider}>
					<ImageSlider direction={direction} />
				</div>
			</div>
			<BottomLogo theme="light" />
		</section>
	);
}
