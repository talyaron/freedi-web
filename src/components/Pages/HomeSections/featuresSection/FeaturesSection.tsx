"use client"

import React, { useState } from "react";
import styles from './featuresSection.module.scss';
import Accordion from "@/components/accordion/Accordion";
import { accordionData } from "@/components/accordion/data/accordionData";

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
    <section style={{direction}} className={styles.wrapper}>
        <div className={styles.wrapper__features}>
            <h1 className={styles.wrapper__features__header}>Our Features</h1>
            <div className={styles.wrapper__features__main}>
                {accordionData.map((features,index) => {
                    return(<Accordion features={features} key={index} accordionOpen={openIndex === index} setAccordionOpen={() => handleAccordionToggle(index)}/>)
                })}

            </div>
        </div>
        <div className={styles.wrapper__imageSlider}>
            {/* <img src="" alt="" /> */}
        </div>
    </section>
    )
}
