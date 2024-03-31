import { useState, useCallback, useEffect } from "react";

export enum LanguagesEnum {
    en = "en",
    ar = "ar",
    de = "de",
    es = "es",
    he = "he",
    nl = "nl",
}

import en from "../assets/Languages/en.json";
import he from "../assets/Languages/he.json";

const languages: Record<string, string>[] = [en, he];

export default function useTranslate() {
    const [currentLanguage, setCurrentLanguage] = useState<LanguagesEnum>(
        LanguagesEnum.en
    );

    const [languageData, setLanguageData] = useState<Record<string, string>>(
        {}
    );

    // Function to change the language
    const changeLanguage = useCallback((newLanguage: LanguagesEnum) => {
        setCurrentLanguage(newLanguage);
    }, []);

    // Fetch language data when the language changes or on component mount
    useEffect(() => {
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
    };
}
