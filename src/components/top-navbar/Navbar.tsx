"use client";

import React from "react";

// Styles
import "./navbar.scss";

// Custom Components
import LanguageDropdown from "./LanguageDropdown";
import LogoWithName from "../logo/LogoWithName";
import { useTranslate } from "@/hooks/useTranslate";

export default function Navbar({
    lang,
}: Readonly<{
    lang: string;
}>) {
    const { t } = useTranslate();

    return (
        <nav className="navbar">
            <LogoWithName />

            <LanguageDropdown lang={lang} />

        </nav>
    );
}
