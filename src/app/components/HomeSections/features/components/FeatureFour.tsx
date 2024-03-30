import Image from "next/image";
import React from "react";

import featureFourOne from "@/assets/Images/feature04-1.png";
import featureFourTwo from "@/assets/Images/feature04-2.png";

export default function FeatureFour() {
    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                position: "absolute",
            }}
        >
            <Image
                alt="feature-image"
                src={featureFourOne}
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
                src={featureFourTwo}
                style={{
                    width: "15vw",
                    height: "auto",
                    position: "absolute",
                    right: "10vw",
                    top: "21vw",
                }}
            />
        </div>
    );
}