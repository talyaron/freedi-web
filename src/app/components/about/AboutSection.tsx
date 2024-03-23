import React from "react";
import Image from "next/image";

import "./style.scss";

// Images
import overview from "@/assets/Images/Overview.png";
import backgroundShape from "@/assets/Images/Background shape 01.png";
import DefaultButton from "../buttons/DefaultButton";

export default function AboutSection() {
    return (
        <section className="aboutSection">
            <Image
                alt="Background-Shape"
                src={backgroundShape}
                className="aboutSection__backgroundShape"
            />
            <div className="aboutSection__overview">
                <Image
                    alt="overview-image"
                    src={overview}
                    className="aboutSection__overview__image"
                />
                <div className="aboutSection__overview__text">
                    <h3>About DeliCol</h3>
                    <p>
                        The goal of Delicol app is to go beyond simple majority
                        rule votes by facilitating informed deliberation,
                        finding common ground, and working towards decisions
                        that incorporate diverse viewpoints and address minority
                        concerns when possible.
                    </p>
                    <p>
                        This is the app that can make group decision-making more
                        democratic, inclusive, and reasoned.
                    </p>
                    <DefaultButton type="primary" text="Talk to Us" />
                </div>
            </div>
        </section>
    );
}
