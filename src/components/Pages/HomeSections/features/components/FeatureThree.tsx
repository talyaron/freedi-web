import Image from "next/image";
import React from "react";

import featureThree01 from "@/assets/Images/feature03-1.png";
import featureThree02 from "@/assets/Images/feature03-2.png";

export default function FeatureThree() {
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
                src={featureThree01}
                style={{
                    width: "10vw",
                    height: "auto",
                    position: "absolute",
                    right: "10vw",
                    top: "0",
                }}
            />
            <Image
                alt="feature-image"
                src={featureThree02}
                style={{
                    width: "10vw",
                    height: "auto",
                    position: "absolute",
                    right: "8vw",
                    top: "10vw",
                }}
            />
        </div>
    );
}
