"use client";

import React from "react";
import Image from "next/image";

// Styles
import "./joinTodayStyle.scss";

// Custom Components
import character from "@/assets/Images/character.png";
import flower from "@/assets/Images/flower.png";

export default function AccessTodaySection() {
    return (
        <section className="AccessTodaySection">
            <div className="AccessTodaySection__wrapper">
                <Image
                    alt="flower-image"
                    src={flower}
                    className="AccessTodaySection__wrapper__flower"
                />
                <p className="sectionText">
                    {
                        "Access your first community debate for free by contacting us today"
                    }
                </p>
                <Image
                    alt="character-image"
                    src={character}
                    className="AccessTodaySection__wrapper__character"
                />
            </div>
        </section>
    );
}
