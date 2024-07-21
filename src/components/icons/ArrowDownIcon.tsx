import React from "react";

interface Props {
    height: string;
    width: string;
    onClick?: () => void;
}

export default function ArrowDownIcon({ height, width, onClick}: Readonly<Props>) {
	return (
		<button className="navbar__languages__ArrowDownIcon" onClick={onClick}>
			<svg
				width={width}
				height={height}
				viewBox="0 0 18 18"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M3 6L9 12L15 6"
					stroke="#4789D1"
					strokeWidth="0.75"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</button>
	);
}
