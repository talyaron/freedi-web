import CodeIcon from "@/components/icons/CodeIcon";
import CrownIcon from "@/components/icons/CrownIcon";
import HandShakeIcon from "@/components/icons/HandShakeIcon";
import LightBulbIcon from "@/components/icons/LightBulbIcon";
import OldWomanIcon from "@/components/icons/OldWomanIcon";
import TeamIcon from "@/components/icons/TeamIcon";
import { generateRandomNumber } from "@/helpers/generators";
import React from "react";
import style from "./BenefitsSectionStyle.module.scss";

export default function BenefitsSection({
	currentLang,
}: Readonly<{
    currentLang: Record<string, string>;
}>) {
	return (
		<section className={style.benefitSection}>
			<h1 className={style.sectionHeader}>{currentLang["Benefits"]}</h1>
			<div className={style.benefitsWrapper}>
				
				{benefitsData.map((benefit) => (
					<div
						className={style.benefit}
						key={generateRandomNumber()}
					>
						{benefit.icon}
						<h4>{currentLang[benefit.title]}</h4>
						<p className={style.sectionText}>
							{currentLang[benefit.description]}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}

const benefitsData = [
	{
		icon: <CrownIcon remSize="3rem" />,
		title: "Empowerment",
		description:
            "Empower your team members to make decisions that they believe in.",
	},
	{
		icon: <TeamIcon remSize="3rem" />,
		title: "Collaboration",
		description:
            "Collaborate with your team members to find the best solutions.",
	},
	{
		icon: <CodeIcon remSize="3rem" />,
		title: "Innovation",
		description:
            "Encourage innovative solutions by allowing diverse viewpoints.",
	},
	{
		icon: <HandShakeIcon remSize="3rem" />,
		title: "Inclusively",
		description: "Include all team members in the decision-making process.",
	},
	{
		icon: <LightBulbIcon remSize="3rem" />,
		title: "Creativity",
		description:
            "Foster creativity by allowing team members to think outside the box.",
	},
	{
		icon: <OldWomanIcon remSize="3rem" />,
		title: "Wisdom",
		description:
            "Leverage the wisdom of your team members to make better decisions.",
	},
];
