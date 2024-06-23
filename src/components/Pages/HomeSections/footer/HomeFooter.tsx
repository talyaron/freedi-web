"use client";

import React from "react";
import Image from "next/image";

import "./footerStyle.scss";

// Images
import backgroundShape from "@/assets/Images/Background shape 01.png";
import backgroundShape2 from "@/assets/Images/Backgroun shape 03.png";
import nature from "@/assets/Images/nature.png";
import flower2 from "@/assets/Images/flower02.png";


// Custom Components
import PageLinks from "@/components/top-navbar/PageLinks";
import LogoWithName from "@/components/logo/LogoWithName";
import ContactPhoneIcon from "@/components/icons/ContactPhoneIcon"
import ContactEmailIcon from "@/components/icons/ContactEmailIcon";
import ArrowUpIcon from "@/components/icons/ArrowUpIcon";

export default function HomeFooter({
    currentLang,
    direction,
}: Readonly<{
    currentLang: Record<string, string>;
    direction: "rtl" | "ltr";
}>) {

    return (
        <div className="footer">
            <div className="footer__mainArea">
                <div className="footer__topText">
                    <p>Together, we can build a better future for everyone</p>
                </div>
                <div className="footer__contactDetails">
                    <div className="footer__contactDetails__call">
                        <ContactPhoneIcon />
                        <div className="footer__contactDetails__text">
                            <p>Call us</p>
                            <p>+972-52-607-9419</p>
                        </div>

                    </div>
                    <div className="footer__contactDetails__email">
                        <ContactEmailIcon />
                        <div className="footer__contactDetails__text" style={{ direction }}>
                            <p>
                                {
                                    currentLang[
                                    "Contact via Email"
                                    ]
                                }
                            </p>
                            <p>tal.yaron@delib.org</p>
                        </div>
                    </div>
                </div>

                <div className="footer__bottomText">
                    <p>FreeDi Genuine Deliberation</p>
                </div>
            </div>
            <hr />
            <div className="footer__bottomArea">
                <div className="footer__arrowUp">
                    <ArrowUpIcon />
                </div>
            </div>
        </div>
    );
}


{/* <Image
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
            /> */}
{/* <div className="footer__text">
                <LogoWithName color="var(--button-primary)" size="1.2rem" /> */}

{/* <PageLinks isFooter={true} /> */ }

{/* <p className="sectionText footer__text__credit">
                    {("From the Institute for Deliberative Democracy")}
                </p>
            </div>
            <Image
                className="footer__backgroundShapeRight"
                alt="background-image-01"
                src={backgroundShape}
            /> */}
