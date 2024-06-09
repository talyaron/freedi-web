import Image from "next/image";
import React from "react";

import featureTwo01 from "@/assets/Images/feature2-01.png";
import featureTwo02 from "@/assets/Images/feature2-02.png";
import featureTwo03 from "@/assets/Images/feature2-03.png";

export default function FeatureTwo() {
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
                src={featureTwo01}
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
                src={featureTwo02}
                style={{
                    width: "15vw",
                    height: "auto",
                    position: "absolute",
                    right: "6vw",
                    top: "3vw",
                }}
            />
            <Image
                alt="feature-image"
                src={featureTwo03}
                style={{
                    width: "15vw",
                    height: "auto",
                    position: "absolute",
                    right: "9vw",
                    top: "10vw",
                }}
            />
        </div>
    );
}
