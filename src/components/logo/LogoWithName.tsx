"use client";

import React from "react";
import FreediLogoIcon from "../icons/FreediLogoIcon";

import style from "./logoStyle.module.scss";
import FreediIcon from "../icons/FreediIcon";

interface Props {
    size?: string;
    color?: string;
}

export default function LogoWithName({
	size = "1.9rem",
	color,
}: Readonly<Props>) {
	return (
		<div className={style["logoBox"]}>
			<FreediLogoIcon size={size} color={color} />
			<FreediIcon height={size} width="4.1rem" />
		</div>
	);
}

// 25 83
