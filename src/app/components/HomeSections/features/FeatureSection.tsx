import React from "react";
import Image from "next/image";

// Images
import backgroundShape from "@/assets/Images/Background shape 01.png";
import firstFeature from "@/assets/Images/feature01-1.png";
import firstFeaturePartTwo from "@/assets/Images/feature01-2.png";

// Styles
import "./FeatureSectionStyle.scss";

export default function FeatureSection() {
    return (
        <section className="featureSection">
            <Image
                className="featureSection__backgroundShape"
                alt="Background-Shape"
                src={backgroundShape}
                quality={100}
                placeholder="blur"
                sizes="40vw"
            />
            <div className="featureSection__explanation">
                <h4>Our features</h4>
                <h2>
                    Make reaching agreements effortless with our DeliCol app
                </h2>
                <p>Real-time conversation and discussion</p>
            </div>
            <div className="featureSection__features">
                <div className="featureSection__features__imageBox">
                    <Image
                        alt="feature-image"
                        src={firstFeature}
                        style={{
                            width: "auto",
                            height: "100%",
                            position: "absolute",
                            left: "30%",
                            top: "20%",
                        }}
                    />
                    <Image
                        alt="feature-image"
                        src={firstFeaturePartTwo}
                        style={{
                            width: "15vw",
                            height: "auto",
                            position: "absolute",
                            left: "40%",
                            top: "70%",
                        }}
                    />
                </div>
            </div>
        </section>
    );
}
