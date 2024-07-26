'use client';

import React, { useState, useRef, useEffect } from "react";
import "./accordion.scss";
import MinusIcon from "../icons/MinusIcon";
import PlusIconLight from "../icons/PlusIconLight";
import { FeaturesData } from "./model/accordionModel";

interface Props {
	feature: FeaturesData;
	isOpen: boolean;
	setAccordionOpen: () => void;
	currentLang: Record<string, string>;
}

const Accordion = ({ feature, isOpen, setAccordionOpen, currentLang }: Props) => {
	const [height, setHeight] = useState("0px");
	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setHeight(isOpen ? `${contentRef.current!.scrollHeight}px` : "0px");
	}, [isOpen]);

	return (
		<div className="wrapper">
			<button className="wrapper__button" onClick={setAccordionOpen}>
				<div className="wrapper__numberWrapper">
					<span>{feature.number}</span>
					<span>
						{isOpen ? (
							<MinusIcon color="var(--dark-text)" width="1.51rem" height="1.41rem" />
						) : (
							<PlusIconLight width="1.51rem" height="1.41rem" />
						)}
					</span>
				</div>
				<h1 className="sectionSubHeader">{currentLang[`${feature.title}`]}</h1>
			</button>
			<div ref={contentRef} className="wrapper__content" style={{ maxHeight: height }}>
				<p className="sectionText">{currentLang[`${feature.description}`]}</p>
			</div>
		</div>
	);
};

export default Accordion;
