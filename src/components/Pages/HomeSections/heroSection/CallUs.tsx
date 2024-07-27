import React from "react";

//Custom Components
import ArrowDownIcon2 from "@/components/icons/ArrowDownIcon2";
import ContactPhoneBlueIcon from "@/components/icons/ContactPhoneBlueIcon";

export default function CallUs({
	currentLang,
}: Readonly<{
	currentLang: Record<string, string>;
}>) {
	// scroll to the bottom of the page

	const scrollDown = () => {
		window.scrollTo({
			top: window.innerHeight * 10,
			behavior: "smooth",
		});
	};

	return (
		<div
			className="
		callUs"
		>
			<button onClick={scrollDown}>
				<ArrowDownIcon2 />
			</button>
			<div className="callUs__phone">
				<ContactPhoneBlueIcon />
				<div
					className="
				callUs__phone__text"
				>
					<p>{currentLang["Call us"]}</p>
					<p>{currentLang["+972-52-607-9419"]}</p>
				</div>
			</div>
		</div>
	);
}
