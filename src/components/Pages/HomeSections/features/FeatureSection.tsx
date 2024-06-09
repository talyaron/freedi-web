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
                <h4 className="sectionHeader">{currentLang["Our features"]}</h4>
                <h3 className="sectionTitle">{currentLang[feature.title]}</h3>
                <p className="sectionText">
                    {currentLang[feature.description]}
                </p>
                <DefaultButton type="primary" text={currentLang["Reach Out"]} />
            </div>

            <div className="featureSection__features">
                {feature.comp}
                <div style={{ position: "absolute", top: "5vw", right: "25vw" }}>
                    <ChevronLeftIcon
                        size="1.5rem"
                        onClick={() => handleClick(false)}
                        style={{ cursor: "pointer" }}
                    />
                </div>
                <div
                    style={{ position: "absolute", top: "5vw", right: "5vw" }}
                >
                    <ChevronRightIcon
                        size="1.5rem"
                        onClick={() => handleClick(true)}
                        style={{ cursor: "pointer" }}
                    />
                </div>
            </div>
        </section>
    );
}
