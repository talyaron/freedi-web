"use client";

import Image from "next/image";
import React from "react";

// Images
import heroImg from "@/assets/Images/Hero illustration.png";

import styles from "./style.module.scss";
import useWindowSize from "@/hooks/useWindowSize";
import { useTranslate } from "@/hooks/useTranslate";

export default function Header() {
    const { width } = useWindowSize();
    const { t } = useTranslate();

    const imgDimenstions = 1920 / 829;

    return (
        <header className={styles.header}>
            <div className={styles.heroTitle}>
                <h2 className={styles.heading}>
                    {t("Delicol fosters community well-being")}
                </h2>
                <h2 className={styles.heading}>
                    {t("Throught compassionate deliberation")}
                </h2>
                <p className={styles.paragraph}>
                    {t("Building Bonds and Bridging Divides")}
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
