"use client";

import React from "react";
import teamwork from "@/assets/Images/teamwork.png";
import Image from "next/image";
import DefaultButton from "@/components/buttons/DefaultButton";

export default function TeamworkSection() {

    return (
        <section className="defaultSection">
            <div className="sectionTextBox" >
                <h3 className="sectionTitle">
                    {(
                        "Make future-proof decisions today to shape a better tomorrow."
                    )}
                </h3>
                <p className="sectionText">
                    {(
                        "Invest effort/time into an in-depth deliberative process with DeliCol app help that enables the end choices to effectively address and serve the requirements and priorities of the entire community."
                    )}
                </p>
                <DefaultButton type="primary" text={("Contact us")} />
            </div>
            <Image
                alt="teamwork-image"
                src={teamwork}
                sizes="20vw"
                style={{ width: "40vw", height: "auto" }}
            />
        </section>
    );
}
