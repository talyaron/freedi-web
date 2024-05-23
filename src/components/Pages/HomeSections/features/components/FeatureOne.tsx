import React from "react";
import Image from "next/image";
import firstFeature from "@/assets/Images/feature01-1.png";
import firstFeaturePartTwo from "@/assets/Images/feature01-2.png";

export default function FeatureOne() {
    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                transition: "all 0.5s",
            }}
        >
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
                    right: "10vw",
                    top: "22vw",
                }}
            />
        </div>
    );
}
