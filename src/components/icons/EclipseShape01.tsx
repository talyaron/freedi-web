import React from "react";

interface Props {
    size?: string;
}

export default function EclipseShape01({ size }: Readonly<Props>) {
	return (
		<svg
			width={size ?? "2.6rem"}
			height={size ?? "2.4rem"}
			viewBox="0 0 48 42"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M46.5 20.8412C53 35.8416 31.8218 41.3412 20.5 41.3412C9.17816 41.3412 0 32.163 0 20.8412C0 9.51937 2 -2.15833 20.5 0.341214C36.5 2.50298 40 5.84082 46.5 20.8412Z"
				fill="#5D98F3"
			/>
		</svg>
	);
}
