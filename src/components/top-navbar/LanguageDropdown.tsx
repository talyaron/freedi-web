"use client";

import React, { useState } from "react";
import UsaFlagIcon from "../icons/UsaFlagIcon";
import IsraelFlagIcon from "../icons/IsraelFlagIcon";
import { useTranslate } from "@/hooks/useTranslate";

export default function LanguageDropdown({ lang }: { lang: string }) {
    const flagArr = [
        {
            lang: "en",
            flag: <UsaFlagIcon />,
        },
        {
            lang: "he",
            flag: <IsraelFlagIcon />,
        },
    ];

    const currentFlag = flagArr.find((x) => x.lang === lang);

    const [isOpen, setIsOpen] = useState(false);

    const handleSetLang = (lang: (typeof flagArr)[0]) => {
        setIsOpen(false);

        const currentPath = window.location.pathname;

        const newPath = currentPath
            .split("/")
            .map((x) => {
                if (x === "he" || x === "en") {
                    return lang.lang;
                }
                return x;
            })
            .join("/");

        window.location.href = newPath;
    };
    return (
        <div className="navbar__languages">
            <button
                className="navbar__languages__flag--current"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                {currentFlag?.flag}
            </button>
            {flagArr
                .filter((x) => x.lang !== lang)
                .map((lang, i) => (
                    <button
                        className="navbar__languages__flag"
                        key={lang.lang.toString()}
                        onClick={() => handleSetLang(lang)}
                        style={{
                            top: isOpen ? (i + 1) * 1.5 + "rem" : i + 1 + "rem",
                            zIndex: isOpen ? 1 : -1,
                            opacity: isOpen ? 1 : 0,
                        }}
                    >
                        {lang.flag}
                    </button>
                ))}
        </div>
    );
}
