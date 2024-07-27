"use client";

import React from "react";
import style from "./HomeFooterStyle.module.scss";

// Custom Components
import ContactPhoneIcon from "@/components/icons/ContactPhoneIcon";
import ContactEmailIcon from "@/components/icons/ContactEmailIcon";
import ArrowUpIcon from "@/components/icons/ArrowUpIcon";

export default function HomeFooter({
	currentLang,
}: Readonly<{
	currentLang: Record<string, string>;
}>) {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div className={style.footer}>
			<div className={style.footer__mainArea}>
				<div className={style.footer__topText}>
					<p>{currentLang["Together, we can build a"]}</p>
					<p>{currentLang["better future for everyone"]}</p>
				</div>
				<div className={style.footer__contactDetails}>
					<div className={style.footer__contactDetails__call}>
						<ContactPhoneIcon />
						<div className={style.footer__contactDetails__text}>
							<p>{currentLang["Call us"]}</p>
							<p>{currentLang["+972-52-607-9419"]}</p>
						</div>
					</div>
					<div className={style.footer__contactDetails__email}>
						<ContactEmailIcon />
						<div className={style.footer__contactDetails__text}>
							<p>{currentLang["Contact via Email"]}</p>
							<p>"tal.yaron@freedi.co"</p>
						</div>
					</div>
				</div>

				<div className={style.footer__bottomText}>
					<p>{currentLang["FreeDi Genuine Deliberation"]}</p>
				</div>
			</div>
			<div className={style.footer__bottomArea}>
				<button>
					<ArrowUpIcon onClick={scrollToTop} />
				</button>
			</div>
		</div>
	);
}
