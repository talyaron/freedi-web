import React from "react";

interface Props {
    text: string;
    onClick?: () => void;
}

export default function RoundedButton({ text, onClick }: Readonly<Props>) {
    return (
        <button onClick={onClick} className="roundedBtn">
            {text}
        </button>
    );
}
