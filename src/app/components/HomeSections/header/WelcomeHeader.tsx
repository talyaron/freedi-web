"use client";

import Image from "next/image";
import React from "react";

// Images
import heroImg from "@/assets/Images/Hero illustration.png";

import styles from "./style.module.scss";
import useWindowSize from "@/app/hooks/useWindowSize";

export default function Header() {
    const { width } = useWindowSize();

    const imgDimenstions = 1920 / 829;

    return (
        <header className={styles.header}>
            <div className={styles.heroTitle}>
                <h2 className={styles.heading}>
                    Delicol fosters community well-being
                </h2>
                <h2 className={styles.heading}>
                    throught compassionate deliberation
                </h2>
                <p className={styles.paragraph}>
                    Building Bonds and Bridging Divides
                </p>
            </div>
            <Image
                alt="Hero-Image"
                src={heroImg}
                quality={100}
                sizes="50vw"
                style={{
                    width: "50vw",
                    maxWidth: "800px",
                    height: "auto",
                    marginTop: `${(width / 500) * imgDimenstions}%`,
                }}
            />
        </header>
    );
}
