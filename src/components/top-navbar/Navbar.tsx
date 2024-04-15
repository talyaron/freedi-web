"use client";

import React from "react";

// Styles
import "./navBarStyle.scss";

// Custom Components
import RoundedButton from "../../components/buttons/RoundedButton";
import PageLinks from "./PageLinks";
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

            <PageLinks />

            <LanguageDropdown lang={lang} />

            <RoundedButton text={t("Contact us")} />
        </nav>
    );
}
