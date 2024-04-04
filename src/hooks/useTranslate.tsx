"use client";

import React, {
    createContext,
    useContext,
    useState,
    useCallback,
    useEffect,
    useMemo,
} from "react";

type LanguageContextType = {
    currentLanguage: string;
    changeLanguage: (newLanguage: LanguagesEnum) => void;
    t: (text: string) => string;
    direction: "rtl" | "ltr";
};

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined
);

export function useTranslate() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useTranslate must be used within a LanguageProvider");
    }

    return context;
}

interface LanguageProviderProps {
    defaultLanguage: LanguagesEnum;
    children: React.ReactNode;
}

export enum LanguagesEnum {
    en = "en",
    he = "he",
}

import en from "../assets/Languages/en.json";
import he from "../assets/Languages/he.json";

const languages: Record<string, string>[] = [en, he];

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
    defaultLanguage,
    children,
}) => {
    const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage);

    const [languageData, setLanguageData] = useState<Record<string, string>>(
        {}
    );

    const changeLanguage = useCallback((newLanguage: LanguagesEnum) => {
        setCurrentLanguage(newLanguage);
    }, []);

    const [direction, setDirection] = useState<"rtl" | "ltr">("rtl");

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

    const contextValue: LanguageContextType = useMemo(() => {
        return {
            currentLanguage,
            changeLanguage,
            t,
            direction,
        };
    }, [currentLanguage, changeLanguage, t, direction]);

    return (
        <LanguageContext.Provider value={contextValue}>
            {children}
        </LanguageContext.Provider>
    );
};
