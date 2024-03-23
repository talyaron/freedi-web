import React from "react";

interface props {
    text: string;
    onClick?: () => void;
}

export default function RoundedButton({ text, onClick }: props) {
    return (
        <button onClick={onClick} className="roundedBtn">
            {text}
        </button>
    );
}
