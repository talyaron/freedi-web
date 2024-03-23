import Image from "next/image";
import React from "react";

// Images
import heroBg from "@/assets/Images/Hero BG illustrations.png";
import heroImg from "@/assets/Images/Hero illustration.png";
import Navbar from "./Navbar";

import styles from "./style.module.scss";

export default function Header() {
    return (
        <header className={styles.header}>
            <Image
                alt="Hero-Background"
                src={heroBg}
                sizes="100vw"
                priority
                style={{
                    width: "100%",
                    height: "auto",
                    position: "absolute",
                    zIndex: -10,
                }}
            />
            <Navbar />
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
                style={{
                    width: "50%",
                    height: "auto",
                    marginTop: "5rem",
                }}
            />
        </header>
    );
}
