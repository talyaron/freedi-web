import React from "react";

import UsaFlagIcon from "../icons/UsaFlagIcon";
import IsraelFlagIcon from "../icons/IsraelFlagIcon";

const flagSize = "1.5rem";

export const flagArr = [
	{
		lang: "en",
		flag: <UsaFlagIcon size={flagSize} />,
	},
	{
		lang: "he",
		flag: <IsraelFlagIcon size={flagSize} />,
	},
];

export interface FlagLanguage {
	lang: string;
	flag: JSX.Element;
}
