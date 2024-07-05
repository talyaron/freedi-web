"use client";

import React, { useState } from "react";
import Image from "next/image";

// Images
import backgroundShape from "@/assets/Images/Background shape 01.png";

// style
import style from "./FeatureSectionStyle.module.scss";
import DefaultButton from "@/components/buttons/DefaultButton";
import ChevronLeftIcon from "@/components/icons/ChevronLeftIcon";
import ChevronRightIcon from "@/components/icons/ChevronRightIcon";
import { features } from "./data/features";

export default function FeatureSection({
    currentLang,
    direction,
}: Readonly<{
    currentLang: Record<string, string>;
    direction: "rtl" | "ltr";
}>) {
    const [feature, setFeature] = useState(features[0]);

    const handleClick = (rightClick: boolean) => {
        if (rightClick) {
            const index = features.indexOf(feature) + 1;
            setFeature(features[index % features.length]);
        } else {
            const index = features.indexOf(feature) - 1;
            setFeature(features[(index + features.length) % features.length]);
        }
    };

    return (
        <section className={style.featureSection + " notSelectable"}>
            <div className={style.featureSection__explanation} style={{ direction }}>
                <h4 className={style.sectionHeader}>{currentLang["Our features"]}</h4>
                <h3 className={style.sectionTitle}>{currentLang[feature.title]}</h3>
                <p className={style.sectionText}>{currentLang[feature.description]}</p>
                <DefaultButton type="primary" text={currentLang["Reach Out"]} />
            </div>

            <div className={style.featureSection__features}>
                <ChevronLeftIcon
                    size="1.5rem"
                    onClick={() => handleClick(false)}
                    style={{
                        cursor: "pointer",
                        position: "absolute",
                        top: "40%",
                        left: "10%",
                    }}
                />
                <Image
                    alt="feature-image"
                    src={feature.image}
                    quality={100}
                    style={{
                        width: feature.width,
                        height: "auto",
                        position: "absolute",
                        right: feature.right,
                        top: feature.top,
                    }}
                />
                <ChevronRightIcon
                    size="1.5rem"
                    onClick={() => handleClick(true)}
                    style={{
                        cursor: "pointer",
                        position: "absolute",
                        top: "40%",
                        right: "10%",
                    }}
                />
            </div>
        </section>
    );
}
