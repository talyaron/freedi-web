"use client";

import React from "react";

// Styles
import "./navBarStyle.scss";

// Hooks
import { LanguageProvider, LanguagesEnum } from "@/hooks/useTranslate";

// Custom Components
import RoundedButton from "../../components/buttons/RoundedButton";
import PageLinks from "./PageLinks";
import LanguageDropdown from "./LanguageDropdown";
import LogoWithName from "../logo/LogoWithName";

export default function Navbar() {
    return (
        <LanguageProvider defaultLanguage={LanguagesEnum.he}>
            <nav className="navbar">
                <LogoWithName />

                <PageLinks />

                <LanguageDropdown />

                <RoundedButton text={"Contact us"} />
            </nav>
        </LanguageProvider>
    );
}
