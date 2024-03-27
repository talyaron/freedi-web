import React from "react";
import Image from "next/image";

// Images
import backgroundShape from "@/assets/Images/Background shape 01.png";
import firstFeature from "@/assets/Images/feature01-1.png";
import firstFeaturePartTwo from "@/assets/Images/feature01-2.png";

// Styles
import "./FeatureSectionStyle.scss";
import DefaultButton from "@/components/buttons/DefaultButton";

export default function FeatureSection() {
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
                <Image
                    alt="feature-image"
                    src={firstFeature}
                    style={{
                        width: "15vw",
                        height: "auto",
                        position: "absolute",
                        right: "15vw",
                        top: "7vw",
                    }}
                />
                <Image
                    alt="feature-image"
                    src={firstFeaturePartTwo}
                    style={{
                        width: "15vw",
                        height: "auto",
                        position: "absolute",
                        right: "10%",
                        top: "22vw",
                    }}
                />
            </div>
        </section>
    );
}
