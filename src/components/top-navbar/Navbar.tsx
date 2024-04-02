"use client";

import React, { useState } from "react";

// Styles
import "./navBarStyle.scss";

// Hooks
import useTranslate, { LanguagesEnum } from "@/hooks/useTranslate";

// Custom Components
import LogoIcon from "../../components/icons/LogoIcon";
import RoundedButton from "../../components/buttons/RoundedButton";
import PageLinks from "./PageLinks";
import CrownIcon from "../icons/CrownIcon";
import UsaFlagIcon from "../icons/UsaFlagIcon";

export default function Navbar() {
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

    const [currentLang, setcurrentLang] = useState(
        flagArr.find((x) => x.lang === currentLanguage)
    );

    const handleSetLang = (lang: (typeof flagArr)[0]) => {
        setcurrentLang(lang);
        changeLanguage(lang.lang);
    };

    return (
        <nav className="navbar">
            <div className="navbar__logoBox">
                <LogoIcon size="2rem" />
                <p className="navbar__logoBox__name">{t("DeliCol")}</p>
            </div>

            <PageLinks />

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

            <RoundedButton text={t("Contact us")} />
        </nav>
    );
}
