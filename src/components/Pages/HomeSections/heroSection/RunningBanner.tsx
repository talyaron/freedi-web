import React from "react";

// Style
import "./runningBanner.scss";

interface Props {
	currentLang: Record<string, string>;
}

function RunningBanner({ currentLang }: Props) {
	const items = [
		currentLang["Consensus reaching technology"],
		currentLang["Everybody can evaluate the different options"],
		currentLang["Suites for all ages"],
		currentLang["Satisfactory solutions"],
		currentLang["Deep thought"],
		currentLang["Modern technology"],
		currentLang["Everybody can write her/his opinion"],
		currentLang["Everybody can see multiple perspectives"],
	];

	return (
		<div className="runningBanner">
			<ul>
				{items.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	);
}

export default RunningBanner;
