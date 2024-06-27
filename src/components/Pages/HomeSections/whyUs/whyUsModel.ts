import { LegacyRef } from "react";

export interface CardModel{
    title: string,
    description: string,
    img: JSX.Element;
}

export interface LangType {
    currentLang: Record<string, string>;
    inSection: boolean;
    itemRef: LegacyRef<HTMLDivElement> | undefined;
}