import React from "react";

import "./joinTodayStyle.scss";

import character from "@/assets/Images/character.png";
import flower from "@/assets/Images/flower.png";
import useTranslate from "@/hooks/useTranslate";
import Image from "next/image";

export default function AccessTodaySection() {
    const { t } = useTranslate();
    return (
        <section className="AccessTodaySection">
            <div className="AccessTodaySection__wrapper">
                <Image
                    alt="flower-image"
                    src={flower}
                    className="AccessTodaySection__wrapper__flower"
                />
                <p className="sectionText">
                    {t(
                        "Access your first community debate for free by contacting us today"
                    )}
                </p>
                <Image alt="character-image" src={character} className="AccessTodaySection__wrapper__character"/>
            </div>
        </section>
    );
}
