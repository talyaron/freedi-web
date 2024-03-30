import React from "react";
import Image from "next/image";

import "./AboutSectionStyle.scss";

// Images
import overview from "@/assets/Images/Overview.png";
import backgroundShape from "@/assets/Images/Background shape 01.png";
import DefaultButton from "../../../../components/buttons/DefaultButton";

// Icons
import CrownIcon from "../../../../components/icons/CrownIcon";
import TeamIcon from "../../../../components/icons/TeamIcon";
import CodeIcon from "../../../../components/icons/CodeIcon";
import HandShakeIcon from "../../../../components/icons/HandShakeIcon";
import LightBulbIcon from "../../../../components/icons/LightBulbIcon";
import OldWomanIcon from "../../../../components/icons/OldWomanIcon";
import { generateRandomNumber } from "@/app/helpers/generators";

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
                    quality={100}
                    placeholder="blur"
                    sizes="50vw"
                    className="aboutSection__overview__image"
                />
                <div className="sectionTextBox">
                    <h3 className="sectionTitle">About DeliCol</h3>
                    <p className="sectionText">
                        The goal of Delicol app is to go beyond simple majority
                        rule votes by facilitating informed deliberation,
                        finding common ground, and working towards decisions
                        that incorporate diverse viewpoints and address minority
                        concerns when possible.
                    </p>
                    <p className="sectionText">
                        This is the app that can make group decision-making more
                        democratic, inclusive, and reasoned.
                    </p>
                    <DefaultButton type="primary" text="Talk to Us" />
                </div>
            </div>
            <div className="aboutSection__benefits">
                {benefitsData.map((benefit) => (
                    <div
                        className="aboutSection__benefits__benefit"
                        key={generateRandomNumber()}
                    >
                        {benefit.icon}
                        <h4>{benefit.title}</h4>
                        <p className="sectionText">{benefit.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

const benefitsData = [
    {
        icon: <CrownIcon remSize="2.5rem" />,
        title: "Empowerment",
        description:
            "Empower your team members to make decisions that they believe in.",
    },
    {
        icon: <TeamIcon remSize="2.5rem" />,
        title: "Collaboration",
        description:
            "Collaborate with your team members to find the best solutions.",
    },
    {
        icon: <CodeIcon remSize="2.5rem" />,
        title: "Innovation",
        description:
            "Encourage innovative solutions by allowing diverse viewpoints.",
    },
    {
        icon: <HandShakeIcon remSize="2.5rem" />,
        title: "Inclusivity",
        description: "Include all team members in the decision-making process.",
    },
    {
        icon: <LightBulbIcon remSize="2.5rem" />,
        title: "Creativity",
        description:
            "Foster creativity by allowing team members to think outside the box.",
    },
    {
        icon: <OldWomanIcon remSize="2.5rem" />,
        title: "Wisdom",
        description:
            "Leverage the wisdom of your team members to make better decisions.",
    },
];
