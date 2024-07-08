"use client";

import React from "react";
import Image from "next/image";

// Styles
import style from "./joinTodayStyle.module.scss";

// Custom Components
import character from "@/assets/Images/character.png";
import flower from "@/assets/Images/flower.png";

export default function AccessTodaySection({
    currentLang,
    direction,
}: Readonly<{
    currentLang: Record<string, string>;
    direction: "rtl" | "ltr";
}>) {
    return (
        <section className={style.AccessTodaySection}>
            <div className={style.AccessTodaySection__wrapper}>
                <Image
                    alt="flower-image"
                    src={flower}
                    className={style.AccessTodaySection__wrapper__flower}
                />
                <p className={style.AccessTodaySection__wrapper__sectionText+ " sectionText"} style={{ direction }}>
                    {
                        currentLang[
                            "Access your first community debate for free by contacting us today"
                        ]
                    }
                </p>
                <Image
                    alt="character-image"
                    src={character}
                    className={style.AccessTodaySection__wrapper__character}
                />
            </div>
        </section>
    );
}
