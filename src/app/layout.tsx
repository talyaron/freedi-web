import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.scss";
import Navbar from "@/components/top-navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Delicol",
    description: "Building Bonds and Bridging Divides",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="he">
            <body className={inter.className} suppressHydrationWarning={true}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
