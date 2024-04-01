import { useState, useCallback, useEffect } from "react";

export enum LanguagesEnum {
    en = "en",
    he = "he",
}

import en from "../assets/Languages/en.json";
import he from "../assets/Languages/he.json";

const languages: Record<string, string>[] = [en, he];

export default function useTranslate() {
    const [currentLanguage, setCurrentLanguage] = useState<LanguagesEnum>(
        LanguagesEnum.he
    );

    const [languageData, setLanguageData] = useState<Record<string, string>>(
        {}
    );

    const [direction, setDirection] = useState<"rtl" | "ltr">("rtl");
    const changeLanguage = useCallback((newLanguage: LanguagesEnum) => {
        setCurrentLanguage(newLanguage);
    }, []);

    useEffect(() => {
        setDirection(currentLanguage === LanguagesEnum.he ? "rtl" : "ltr");

        async function fetchLanguageData() {
            try {
                const languageIndex =
                    Object.values(LanguagesEnum).indexOf(currentLanguage);
                if (languageIndex !== -1) {
                    setLanguageData(languages[languageIndex]);
                } else {
                    console.error(
                        `Language data not found for ${currentLanguage}`
                    );
                }
            } catch (error: any) {
                console.error(`Error fetching language data: ${error.message}`);
            }
        }

        fetchLanguageData();
    }, [currentLanguage]);

    const t = (text: string) => {
        return languageData[text] || text;
    };

    return {
        currentLanguage,
        changeLanguage,
        t,
        direction,
    };
}
