"use client";

import React, { useState } from "react";
import Image from "next/image";

// Images
import backgroundShape from "@/assets/Images/Background shape 01.png";

// Styles
import "./FeatureSectionStyle.scss";
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
        <section className="featureSection notSelectable">
            <div className="featureSection__explanation" style={{ direction }}>
                <h4>{currentLang["Our features"]}</h4>
                <h3 className="sectionTitle">{currentLang[feature.title]}</h3>
                <p className="sectionText">
                    {currentLang[feature.description]}
                </p>
                <DefaultButton type="primary" text={currentLang["Reach Out"]} />
            </div>

            <div className="featureSection__features">
                <Image
                    className="featureSection__features__backgroundShape"
                    alt="Background-Shape"
                    src={backgroundShape}
                    quality={100}
                    sizes="40vw"
                />
                {feature.comp}
                <div style={{ position: "absolute", top: "17vw", left: "5vw" }}>
                    <ChevronLeftIcon
                        size="2rem"
                        onClick={() => handleClick(false)}
                        style={{ cursor: "pointer" }}
                    />
                </div>
                <div
                    style={{ position: "absolute", top: "17vw", right: "12vw" }}
                >
                    <ChevronRightIcon
                        size="2rem"
                        onClick={() => handleClick(true)}
                        style={{ cursor: "pointer" }}
                    />
                </div>
            </div>
        </section>
    );
}
