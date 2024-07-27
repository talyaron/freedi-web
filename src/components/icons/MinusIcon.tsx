import React from "react";

type Props = {
	color: string;
	width?: string;
	height?: string;
};

const MinusIcon = ({ width, height, color }: Props) => {
	return (
		<svg
			width={width ? width : "26"}
			height={height ? height : "25"}
			viewBox="0 0 26 25"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M20.4922 12.3555L5.50872 12.3555"
				stroke={color ? color : "#759FE3"}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default MinusIcon;
