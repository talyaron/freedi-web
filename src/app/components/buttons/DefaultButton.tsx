import React from "react";

interface props {
    text: string;
    onClick?: () => void;
    type: string;
}

export default function DefaultButton({ text, onClick, type }: props) {
    return (
        <button onClick={onClick} className={`defaultBtn --${type}`}>
            {text}
        </button>
    );
}
