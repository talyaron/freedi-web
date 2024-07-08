"use client";

import React from "react";
import teamwork from "@/assets/Images/teamwork.png";
import Image from "next/image";
import DefaultButton from "@/components/buttons/DefaultButton";
import style from "./teamWorkStyle.module.scss";

export default function TeamworkSection({
    currentLang,
    direction,
}: Readonly<{
    currentLang: Record<string, string>;
    direction: "rtl" | "ltr";
}>) {
    return (
        <section className={style.teamWorkSection}>
            <div className={style.sectionTextBox} style={{ direction }}>
                <h3 className={style.sectionTitle}>
                    {
                        currentLang[
                            "Make future-proof decisions today to shape a better tomorrow."
                        ]
                    }
                </h3>
                <p className={style.sectionText}>
                    {
                        currentLang[
                            "Invest effort/time into an in-depth deliberative process with Freedi app help that enables the end choices to effectively address and serve the requirements and priorities of the entire community."
                        ]
                    }
                </p>
                <DefaultButton
                    type="primary"
                    text={currentLang["Contact us"]}
                />
            </div>
            <Image
                className={style.teamWorkSection__teamworkImg}
                alt="teamwork-image"
                src={teamwork}
                sizes="20vw"
                quality={100}
                unoptimized
            />
        </section>
    );
}
