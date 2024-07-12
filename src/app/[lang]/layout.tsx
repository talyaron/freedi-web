"use client";

import React from "react";
import Navbar from "@/components/top-navbar/Navbar";
import { LanguageProvider } from "@/hooks/useTranslate";

export default function DashboardLayout({
	children,
	params,
}: Readonly<{
    children: React.ReactNode;
    params: { lang: string };
}>) {
	return (
		<LanguageProvider>
			<Navbar lang={params.lang} />
			{children}
		</LanguageProvider>
	);
}
