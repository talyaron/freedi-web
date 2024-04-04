"use client";

import React from "react";
import LogoIcon from "../icons/LogoIcon";

import "./logoStyle.scss";
import { useTranslate } from "@/hooks/useTranslate";

interface Props {
    size?: string;
    color?: string;
}

export default function LogoWithName({
    size = "2rem",
    color,
}: Readonly<Props>) {
    const { t } = useTranslate();

    return (
        <div className="logoBox">
            <LogoIcon size={"2rem"} color={color} />
            <p className="logoBox__name" style={{ color, fontSize: size }}>
                {t("DeliCol")}
            </p>
        </div>
    );
}
