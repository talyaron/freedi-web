"use client";

import React from "react";

// Styles
import "./navBarStyle.scss";

// Custom Components
import RoundedButton from "../../components/buttons/RoundedButton";
import PageLinks from "./PageLinks";
import LanguageDropdown from "./LanguageDropdown";
import LogoWithName from "../logo/LogoWithName";

export default function Navbar({
    lang,
}: {
    lang: string;
}) {
    return (
        <nav className="navbar">
            <LogoWithName />

            <PageLinks />

            <LanguageDropdown lang={lang} />

            <RoundedButton text={"Contact us"} />
        </nav>
    );
}
