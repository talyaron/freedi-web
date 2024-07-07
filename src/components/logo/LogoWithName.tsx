"use client";

import React from "react";
import FreediLogoIcon from "../icons/FreediLogoIcon";

import "./logoStyle.scss";
import { useTranslate } from "@/hooks/useTranslate";
import FreediIcon from "../icons/FreediIcon";

interface Props {
    size?: string;
    color?: string;
}

export default function LogoWithName({
    size = "1rem",
    color,
}: Readonly<Props>) {
    const { t } = useTranslate();

    return (
        <div className="logoBox">
            <FreediLogoIcon size={"1.9rem"} color={color} />
            <FreediIcon height="1.9rem" width="4.1rem" />
        </div>
    );
}

// 25 83
