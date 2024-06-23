"use client";

import React from "react";
import LogoIcon from "../icons/LogoIcon";

import "./logoStyle.scss";
import { useTranslate } from "@/hooks/useTranslate";
import FreediLogo from "../icons/FreediIcon";

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
            <LogoIcon size={"1.9rem"} color={color} />
            <FreediLogo height="1.9rem" width="4.1rem" />
        </div>
    );
}

// 25 83
