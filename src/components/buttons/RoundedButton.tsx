import { useTranslate } from "@/hooks/useTranslate";
import React from "react";

interface Props {
    text: string;
    onClick?: () => void;
}

export default function RoundedButton({ text, onClick }: Readonly<Props>) {
    const { t } = useTranslate();

    return (
        <button onClick={onClick} className="roundedBtn">
            {t(text)}
        </button>
    );
}
