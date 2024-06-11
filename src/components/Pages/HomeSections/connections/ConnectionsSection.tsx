"use client";

import React from "react";

import "./connectionStyle.scss";

import connectionIllustration from "@/assets/Images/Connection illustration.png";
import connectionIllustrationWide from "@/assets/Images/Connection_illustration02.png";
import Image from "next/image";
import DefaultButton from "@/components/buttons/DefaultButton";
import useWindowSize from "@/hooks/useWindowSize";

export default function ConnectionsSection({
    currentLang,
    direction,
}: Readonly<{
    currentLang: Record<string, string>;
    direction: "rtl" | "ltr";
}>) {
    const { width } = useWindowSize();

    return (
        <section className="connections">
            <Image
                className="connections__img"
                alt="connection-illustration"
                quality={100}
                src={
                    width > 1440
                        ? connectionIllustrationWide
                        : connectionIllustration
                }
            />
            <div className="sectionTextBox" style={{ direction }}>
                <h3 className="sectionTitle">
                    {currentLang["Stay always connected and never miss a beat"]}
                </h3>
                <p className="sectionText">
                    {
                        currentLang[
                            "The app provides real-time notifications and updates on ongoing discussions, proposals, voting status, and final decisions. This allows all community members to easily follow and participate in the deliberative process from anywhere."
                        ]
                    }
                </p>
                <DefaultButton
                    type="primary"
                    text={currentLang["Let's Talk"]}
                />
            </div>
        </section>
    );
}
