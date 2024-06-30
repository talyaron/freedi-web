"use client";

import React, { useEffect, createContext, useRef, useMemo } from "react";

import "./whyUsStyle.scss";

import WhyUsCardContainer from "./WhyUsCardContainer";
import { LangType } from "./whyUsModel";
import { useIsVisible } from "@/hooks/useIsVisible";

export const LangContext = createContext<LangType | undefined>(undefined);

export default function WhyUsSection({
    currentLang,
    direction,
}: Readonly<{
    currentLang: Record<string, string>;
    direction: "rtl" | "ltr";
}>) {

    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useIsVisible(ref);

    useEffect(() => {
        const body = document.querySelector(".main") as HTMLElement;
        if (isVisible) {
            body.classList.add("whyUsActive__main");
        } else {
            body.classList.remove("whyUsActive__main");
        }
    }, [isVisible]);

    const contextValue = useMemo(() => ({ currentLang, isVisible, itemRef: ref }), [currentLang, isVisible]);

    return (
        <LangContext.Provider value={contextValue}>
            <section
                className={isVisible ? "whyUs whyUsActive" : "whyUs"}
                style={{ direction }}
            >
                <h1
                    className={
                        isVisible
                            ? "whyUs--title whyUsActive--title"
                            : "whyUs--title"
                    }
                >
                    {currentLang["Why Freedi?"]}
                </h1>
                <WhyUsCardContainer />
            </section>
        </LangContext.Provider>
    );
}
