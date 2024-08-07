import React from "react";

export default function PlusIcon({ color }: { color: string }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			id="plus"
			fill={color}
			width="1.5rem"
			height="1.5rem"
		>
			<g data-name="Layer 2">
				<path
					d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z"
					data-name="plus"
				></path>
			</g>
		</svg>
	);
}
