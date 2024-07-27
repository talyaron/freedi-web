"use client";

import React from "react";

// Styles
import "./navbar.scss";

// Custom Components
import LanguageDropdown from "./LanguageDropdown";
import LogoWithName from "../logo/LogoWithName";

export default function Navbar({
	lang,
}: Readonly<{
	lang: string;
}>) {
	return (
		<nav className="navbar">
			<LogoWithName />

			<LanguageDropdown lang={lang} />
		</nav>
	);
}
