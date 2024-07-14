import React from 'react';

export default function AgreementIcon({
	color = "#C5DBE9",
}: {
    color: string;
}) {
	return (
		<svg
			width="1.5rem"
			height="1.4rem"
			viewBox="0 0 23 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M2.82996 12.0293L21.0349 12.0293C21.4465 12.0293 21.8089 12.1512 22.0558 12.3256C22.3051 12.5017 22.3965 12.6962 22.3965 12.8528C22.3965 13.017 22.3051 13.2112 22.0671 13.3833C21.8299 13.5549 21.4775 13.6764 21.0665 13.6764L2.82996 13.6764C2.41895 13.6764 2.06661 13.5549 1.82939 13.3833C1.59139 13.2111 1.5 13.017 1.5 12.8528C1.5 12.6886 1.59139 12.4945 1.82939 12.3224C2.06661 12.1508 2.41895 12.0293 2.82996 12.0293Z"
				fill="#C5DBE9"
				stroke="#C5DBE9"
			/>
			<path
				d="M14.9763 6.20605L21.188 6.20605C21.3439 6.20605 21.7183 6.25943 22.0362 6.41813C22.3466 6.57306 22.4998 6.76679 22.4998 7.02958C22.4998 7.34459 22.3507 7.5291 22.1329 7.65893C21.8915 7.80285 21.5956 7.85311 21.4469 7.85311L14.9763 7.85311C14.8617 7.85311 14.5665 7.78731 14.3055 7.61875C14.0553 7.45717 13.9233 7.26243 13.9233 7.02958C13.9233 6.79674 14.0553 6.60199 14.3055 6.44042C14.5665 6.27186 14.8617 6.20605 14.9763 6.20605Z"
				fill="#C5DBE9"
				stroke="#C5DBE9"
			/>
			<path
				d="M2.82996 17.3237L21.0349 17.3237C21.4465 17.3237 21.8089 17.4456 22.0558 17.62C22.3051 17.7961 22.3965 17.9906 22.3965 18.1473C22.3965 18.3115 22.3051 18.5056 22.0671 18.6777C21.8299 18.8493 21.4775 18.9708 21.0665 18.9708L2.82996 18.9708C2.41895 18.9708 2.06661 18.8493 1.82939 18.6777C1.59139 18.5056 1.5 18.3115 1.5 18.1473C1.5 17.9831 1.59139 17.7889 1.82939 17.6168C2.06661 17.4452 2.41895 17.3237 2.82996 17.3237Z"
				fill="#C5DBE9"
				stroke="#C5DBE9"
			/>
			<path
				d="M10.8352 1.4707L5.73763 7.55894L2.03516 4.61184"
				stroke={color}
				strokeWidth="2.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
