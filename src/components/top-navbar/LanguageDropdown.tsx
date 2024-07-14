"use client";

import React, { useState } from "react";
import UsaFlagIcon from "../icons/UsaFlagIcon";
import IsraelFlagIcon from "../icons/IsraelFlagIcon";
import ArrowDownIcon from "../icons/ArrowDownIcon";

const flagSize = "1.2rem";

export default function LanguageDropdown({ lang }: Readonly<{ lang: string }>) {
	const flagArr = [
		{
			lang: "en",
			flag: <UsaFlagIcon size={flagSize} />,
		},
		{
			lang: "he",
			flag: <IsraelFlagIcon size={flagSize} />,
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
							right: isOpen ? (i + 1) * 1 + "rem" : i + 1 + "rem",
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
