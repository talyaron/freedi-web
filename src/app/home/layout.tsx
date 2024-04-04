"use client";

import Navbar from "@/components/top-navbar/Navbar";
import { LanguageProvider, LanguagesEnum } from "@/hooks/useTranslate";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <LanguageProvider defaultLanguage={LanguagesEnum.he}>
           
            {children}
        </LanguageProvider>
    );
}
