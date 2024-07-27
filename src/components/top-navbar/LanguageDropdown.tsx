"use client";

import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

// Custom Components
import ArrowDownIcon from "../icons/ArrowDownIcon";

// Helpers
import { flagArr, FlagLanguage } from "./flags";

export default function LanguageDropdown({ lang }: Readonly<{ lang: string }>) {
	const { push } = useRouter();
	const pathname = usePathname();

	const currentFlag = flagArr.find((x) => x.lang === lang);

	const [isOpen, setIsOpen] = useState(false);

	const handleSetLang = (lang: FlagLanguage) => {
		setIsOpen(false);

		const newPath = pathname
			.split("/")
			.map((x) => {
				if (x === "he" || x === "en") {
					return lang.lang;
				}

				return x;
			})
			.join("/");

		push(newPath);
	};

	return (
		<div className="navbar__languages">
			<button
				className="navbar__languages__flag--current"
				onClick={() => setIsOpen((prev) => !prev)}
			>
				{currentFlag?.flag}
			</button>
			<ArrowDownIcon
				height="0.7rem"
				width="0.7rem"
				onClick={() => setIsOpen((prev) => !prev)}
			/>
			{flagArr
				.filter((x) => x.lang !== lang)
				.map((lang, i) => (
					<button
						className="navbar__languages__flag"
						key={lang.lang.toString()}
						onClick={() => handleSetLang(lang)}
						style={{
							top: isOpen ? (i + 1) * 2 + "rem" : i + 1 + "rem",
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
