"use client";

import Navbar from "@/components/top-navbar/Navbar";
import { getLanguageData } from "@/helpers/languages";
import { LanguageProvider } from "@/hooks/useTranslate";

export default function DashboardLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { lang: string };
}) {

    return (
        <LanguageProvider>
            <Navbar lang={params.lang} />
            {children}
        </LanguageProvider>
    );
}
