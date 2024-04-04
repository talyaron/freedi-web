"use client";

import { LanguagesEnum, useTranslate } from "@/hooks/useTranslate";
import React, { useState } from "react";
import UsaFlagIcon from "../icons/UsaFlagIcon";
import CrownIcon from "../icons/CrownIcon";

export default function LanguageDropdown() {
    const { t, currentLanguage, changeLanguage } = useTranslate();

    const flagArr = [
        {
            lang: LanguagesEnum.en,
            flag: <UsaFlagIcon size="1.5rem" />,
        },
        {
            lang: LanguagesEnum.he,
            flag: <CrownIcon remSize="1.5rem" />,
        },
    ];

    const currentFlag = flagArr.find((x) => x.lang === currentLanguage);

    const [currentLang, setCurrentLang] = useState(currentFlag);

    const handleSetLang = (lang: (typeof flagArr)[0]) => {
        setCurrentLang(lang);
        changeLanguage(lang.lang);
    };
    return (
        <div className="navbar__languages">
            {currentLang?.flag}
            <div className="navbar__languages__dropdown">
                {flagArr
                    .filter((x) => x.lang !== currentLanguage)
                    .map((lang) => (
                        <button
                            key={lang.lang.toString()}
                            onClick={() => handleSetLang(lang)}
                        >
                            {lang.flag}
                        </button>
                    ))}
            </div>
        </div>
    );
}
