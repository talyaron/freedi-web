"use client";

import React from "react";

import "./connectionStyle.scss";

import connectionIllustration from "@/assets/Images/Connection illustration.png";
import Image from "next/image";
import DefaultButton from "@/components/buttons/DefaultButton";

export default function ConnectionsSection({
    currentLang,
    direction,
}: Readonly<{
    currentLang: Record<string, string>;
    direction: "rtl" | "ltr";
}>) {
    return (
        <section className="connections">
            <Image
                alt="connection-illustration"
                src={connectionIllustration}
                style={{ width: "40vw", height: "auto" }}
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
