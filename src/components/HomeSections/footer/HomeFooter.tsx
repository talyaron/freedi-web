import React from "react";
import Image from "next/image";

import "./footerStyle.scss";

// Hooks
import useTranslate from "@/hooks/useTranslate";

// Images
import backgroundShape from "@/assets/Images/Background shape 01.png";
import backgroundShape2 from "@/assets/Images/Backgroun shape 03.png";
import nature from "@/assets/Images/nature.png";
import flower2 from "@/assets/Images/flower02.png";

// Custom Components
import LogoIcon from "@/components/icons/LogoIcon";
import PageLinks from "@/components/top-navbar/PageLinks";

export default function HomeFooter() {
    const { t } = useTranslate();

    return (
        <section className="footer">
            <Image
                className="footer__backgroundShapeLeft"
                alt="background-image-01"
                src={backgroundShape}
            />
            <Image
                className="footer__backgroundShapeMiddle"
                alt="background-image-03"
                src={backgroundShape2}
            />
            <Image
                className="footer__flowerImage"
                alt="flower-image-02"
                src={flower2}
            />
            <Image
                className="footer__natureImage"
                alt="nature-image"
                src={nature}
            />
            <div className="footer__text">
                <div className="footer__text__logo">
                    <LogoIcon size="2rem" color="var(--button-primary)" />
                    <p>{t("DeliCol")}</p>
                </div>

                <PageLinks isFooter={true} />

                <p className="sectionText footer__text__credit">
                    {t("From the Institute for Deliberative Democracy")}
                </p>
            </div>
            <Image
                className="footer__backgroundShapeRight"
                alt="background-image-01"
                src={backgroundShape}
            />
        </section>
    );
}
