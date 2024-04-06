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
    changeLanguage: (newLanguage: string) => void;
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
    children: React.ReactNode;
}

const languagesArr = ["en", "he"];

import en from "../assets/Languages/en.json";
import he from "../assets/Languages/he.json";
import { usePathname } from "next/navigation";

const languages: Record<string, string>[] = [en, he];

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
    children,
}) => {
    const path = usePathname();

    const [currentLanguage, setCurrentLanguage] = useState(path.split("/")[1]);

    const [languageData, setLanguageData] = useState<Record<string, string>>(
        {}
    );

    const changeLanguage = useCallback((newLanguage: string) => {
        setCurrentLanguage(newLanguage);
    }, []);

    const [direction, setDirection] = useState<"rtl" | "ltr">("rtl");

    useEffect(() => {
        setDirection(currentLanguage === "he" ? "rtl" : "ltr");
        async function fetchLanguageData() {
            try {
                const languageIndex =
                    Object.values(languagesArr).indexOf(currentLanguage);
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
