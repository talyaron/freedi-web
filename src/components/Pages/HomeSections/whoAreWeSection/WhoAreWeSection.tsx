"use client";

import React from "react";
import Image from "next/image";
import "./whoAreWeSectionStyle.scss";

// Images
import whoAreWeImg from "@/assets/Images/WhoAreWe.png";
import geometryImg from "@/assets/Images/geometryTop.png";

// Custom components
import BottomLogo from "@/components/bottomLogo/BottomLogo";

function WhoAreWeSection({
	currentLang,
}: Readonly<{
	currentLang: Record<string, string>;
}>) {
	return (
		<section className="whoAreWe">
			<div className="whoAreWe__imageBox">
				<h1 className="sectionHeader">{currentLang["Who are we?"]}</h1>
				<Image className="heroImg" src={whoAreWeImg} alt="Who Are We" />
				<h4 className="sectionSubHeader">
					{
						currentLang[
							"Empowering Collaborative Decision-Making Through Digital Deliberation?"
						]
					}
				</h4>
			</div>
			<div className="whoAreWe__textBox">
				<Image
					className="geometryImg"
					src={geometryImg}
					alt="Geometry Img"
				/>
				<div className="whoAreWe__textBox">
					<p className="sectionText">
						{
							currentLang[
								"In today's polarized world, finding common ground can feel like an uphill battle. But we believe that through open and inclusive dialogue, even the toughest issues have solutions."
							]
						}
					</p>
					<p className="sectionText">
						{currentLang["That's why we created"]}
						<span className="free">{currentLang["Free"]}</span>
						<span className="di">{currentLang["Di"]}</span>{" "}
						{
							currentLang[
								"- a user-friendly platform that brings the principles of deliberative democracy into the digital age. Our app provides a virtual space where diverse groups can gather, share perspectives, weigh evidence, and engage in reasoned debate."
							]
						}
					</p>
					<p className="sectionText">
						{
							currentLang[
								"The end goal? Fostering mutual understanding and crafting fair, well-informed agreements on the complex matters that impact us all."
							]
						}
					</p>
					<p className="sectionText">
						{currentLang["Step into the"]}{" "}
						<span className="free">{currentLang["Free"]}</span>
						<span className="di">{currentLang["Di"]}</span>{" "}
						{
							currentLang[
								"experience and help bridge divides through the power of deliberation!"
							]
						}
					</p>
				</div>
			</div>
			{/* <BottomLogo theme={"light"} /> */}
		</section>
	);
}

export default WhoAreWeSection;
