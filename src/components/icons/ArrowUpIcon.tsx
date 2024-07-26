import React from "react";

const AccessiblityIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width="2rem"
			height="2rem"
			viewBox="0 0 40 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props} 
		>
			<path d="M0.5 20C0.5 9.23045 9.23045 0.5 20 0.5C30.7696 0.5 39.5 9.23045 39.5 20C39.5 30.7696 30.7696 39.5 20 39.5C9.23045 39.5 0.5 30.7696 0.5 20Z" stroke="white" />
			<path d="M20 11V29" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M26 17L20 11L14 17" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
}

export default AccessiblityIcon;
