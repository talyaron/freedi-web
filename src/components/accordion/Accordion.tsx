"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./accordion.module.scss";
import MinusIcon from "../icons/MinusIcon";
import PlusIconLight from "../icons/PlusIconLight";
import { FeaturesData } from "./model/accordionModel";

interface Props {
	features: FeaturesData;
	accordionOpen: boolean;
	setAccordionOpen: () => void;
}

const Accordion = ({ features, accordionOpen, setAccordionOpen }: Props) => {
	const [height, setHeight] = useState("0px");
	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setHeight(
			accordionOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
		);
	}, [accordionOpen]);

	return (
		<div
			className={styles.wrapper}
			style={
				accordionOpen
					? { borderBottom: "0px" }
					: { borderBottom: "1px solid var(--card-stroke)" }
			}
		>
			<button
				className={styles.wrapper__button}
				onClick={setAccordionOpen}
			>
				<span className={styles.wrapper__button__title}>
					<span className={styles.wrapper__button__title__number}>
						{features.number}
					</span>
					<MinusIcon
						color="var(--dark-text)"
						width="1.51rem"
						height="1.41rem"
						strokeColor="var(--dark-text)"
					/>{" "}
					{features.title}
					<span
						className={`${styles.wrapper__button__title__number} ${styles.wrapper__button__title__cloneNumber}`}
					>
						{features.number}
					</span>
				</span>
                <span><PlusIconLight width='1.51rem' height='1.41rem' open={accordionOpen}/></span>
			</button>
			<div
				ref={contentRef}
				className={`${styles.wrapper__descriptionWrapper} ${accordionOpen ? styles.open : ""}`}
				style={{ maxHeight: height }}
			>
				<span
					className={styles.wrapper__descriptionWrapper__description}
				>
					{features.description}
				</span>
			</div>
		</div>
	);
};

export default Accordion;
