"use client";

import { LanguagesEnum, useTranslate } from "@/hooks/useTranslate";
import React, { useState } from "react";
import UsaFlagIcon from "../icons/UsaFlagIcon";
import IsraelFlagIcon from "../icons/IsraelFlagIcon";

export default function LanguageDropdown() {
    const { t, currentLanguage, changeLanguage } = useTranslate();

    const flagArr = [
        {
            lang: LanguagesEnum.en,
            flag: <UsaFlagIcon />,
        },
        {
            lang: LanguagesEnum.en,
            flag: <UsaFlagIcon />,
        },
        {
            lang: LanguagesEnum.he,
            flag: <IsraelFlagIcon />,
        },
    ];

    const currentFlag = flagArr.find((x) => x.lang === currentLanguage);

    const [currentLang, setCurrentLang] = useState(currentFlag);
    const [isOpen, setIsOpen] = useState(false);

    const handleSetLang = (lang: (typeof flagArr)[0]) => {
        setIsOpen(false);
        setCurrentLang(lang);
        changeLanguage(lang.lang);
    };
    return (
        <div className="navbar__languages">
            <button
                className="navbar__languages__flag--current"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                {currentLang?.flag}
            </button>
            {flagArr
                .filter((x) => x.lang !== currentLanguage)
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
