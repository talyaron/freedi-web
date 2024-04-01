import React from "react";

interface Props {
    size?: string;
}

export default function CircleIcon({ size }: Readonly<Props>) {
    return (
        <svg
            width={size ?? "1.5rem"}
            height={size ?? "1.5rem"}
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="15" cy="15" r="15" fill="#5D98F3" />
        </svg>
    );
}
