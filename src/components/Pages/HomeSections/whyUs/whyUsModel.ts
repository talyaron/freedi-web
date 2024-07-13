import { LegacyRef } from "react";

export interface CardModel{
    title: string,
    description: string,
    img: JSX.Element;
}

export interface LangType {
    currentLang: Record<string, string>;
    isVisible: boolean;
    itemRef: LegacyRef<HTMLDivElement> | undefined;
}