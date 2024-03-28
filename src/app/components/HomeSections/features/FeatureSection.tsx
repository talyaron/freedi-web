"use client";

import React from "react";
import Image from "next/image";

// Images
import backgroundShape from "@/assets/Images/Background shape 01.png";
import firstFeature from "@/assets/Images/feature01-1.png";
import firstFeaturePartTwo from "@/assets/Images/feature01-2.png";

// Styles
import "./FeatureSectionStyle.scss";
import DefaultButton from "@/components/buttons/DefaultButton";
import ChevronLeftIcon from "@/components/icons/icons/ChevronLeftIcon";
import ChevronRightIcon from "@/components/icons/icons/ChevronRightIcon";
import FeatureOne from "./components/FeatureOne";
import FeatureTwo from "./components/FeatureTwo";

export default function FeatureSection() {
    const handleClick = (rightClick: boolean) => {
        console.log("Button Clicked");
    };

    return (
        <section className="featureSection">
            <div className="featureSection__explanation">
                <h4>Our features</h4>
                <h2>
                    Make reaching agreements effortless with our DeliCol app
                </h2>
                <p>Real-time conversation and discussion</p>
                <DefaultButton type="primary" text="Reach Out" />
            </div>

            <div className="featureSection__features">
                <Image
                    className="featureSection__features__backgroundShape"
                    alt="Background-Shape"
                    src={backgroundShape}
                    quality={100}
                    placeholder="blur"
                    sizes="40vw"
                />
                <FeatureTwo />
                <div style={{ position: "absolute", top: "17vw", left: "5vw" }}>
                    <ChevronLeftIcon
                        size="2rem"
                        onClick={() => handleClick(false)}
                    />
                </div>
                <div
                    style={{ position: "absolute", top: "17vw", right: "12vw" }}
                >
                    <ChevronRightIcon
                        size="2rem"
                        onClick={() => handleClick(true)}
                    />
                </div>
            </div>
        </section>
    );
}
