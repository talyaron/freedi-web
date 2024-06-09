import React from "react";
import Image from "next/image";

import "./AboutSectionStyle.scss";

// Images
import overview from "@/assets/Images/Overview.png";
import bubble from "@/assets/Images/bubble.png";
import DefaultButton from "../../../buttons/DefaultButton";

// Icons
import CrownIcon from "../../../icons/CrownIcon";
import TeamIcon from "../../../icons/TeamIcon";
import CodeIcon from "../../../icons/CodeIcon";
import HandShakeIcon from "../../../icons/HandShakeIcon";
import LightBulbIcon from "../../../icons/LightBulbIcon";
import OldWomanIcon from "../../../icons/OldWomanIcon";
import { generateRandomNumber } from "@/helpers/generators";

export default function AboutSection({
    currentLang,
    direction,
}: Readonly<{
    currentLang: Record<string, string>;
    direction: "rtl" | "ltr";
}>) {
    return (
        <section className="aboutSection">
            <div className="aboutSection__imageWrapper">
                <Image
                    alt="bubble-image"
                    src={bubble}
                    quality={100}
                    className="aboutSection__imageWrapper__bubble first"
                />
                <Image
                    alt="bubble-image"
                    src={bubble}
                    quality={100}
                    className="aboutSection__imageWrapper__bubble second"
                />
                <Image
                    alt="bubble-image"
                    src={bubble}
                    quality={100}
                    className="aboutSection__imageWrapper__bubble third"
                />
                <Image
                    alt="overview-image"
                    src={overview}
                    quality={100}
                    className="aboutSection__imageWrapper__image"
                />
            </div>
            <div className="aboutSection__info" style={{ direction }}>
                <h3 className="aboutSection__info__title">
                    {currentLang["About Freedi"]}
                </h3>
                <p className="aboutSection__info__text">
                    {
                        currentLang[
                            "The goal of Freedi app is to go beyond simple majority rule votes by facilitating informed deliberation, finding common ground, and working towards decisions that incorporate diverse viewpoints and address minority concerns when possible."
                        ]
                    }
                </p>
                <DefaultButton
                    type="primary"
                    text={currentLang["Talk to Us"]}
                />
            </div>
        </section>
    );
}
