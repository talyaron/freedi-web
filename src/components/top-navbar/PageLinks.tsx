import React from "react";

import "./navbar.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTranslate } from "@/hooks/useTranslate";

interface PageLinksProps {
    isFooter?: boolean;
}

export default function PageLinks({ isFooter }: Readonly<PageLinksProps>) {
    const { t, direction } = useTranslate();
    const pathname = usePathname();

    const links = ["home", "about", "blog", "pricing"];

    const currentLinkColor = (link: (typeof links)[1]) =>
        pathname.includes(link) || (pathname === "/" && link === "home")
            ? "var(--button-primary)"
            : "#222";

    const linkColor = (link: (typeof links)[1]) =>
        isFooter ? currentLinkColor(link) : "var(--white)";

    return (
        <ul style={{ direction }}>
            {links.map((link) => (
                <li key={link}>
                    <Link
                        style={{
                            fontWeight: pathname.includes(link) ? "bold" : 100,

                            textDecoration: pathname.includes(link)
                                ? "underline"
                                : "none",

                            color: linkColor(link),

                            fontSize: !isFooter ? "1.4rem" : "1rem",
                        }}
                        href={`/${pathname.split("/")[1]}/${link}`}
                    >
                        {t(link.charAt(0).toUpperCase() + link.slice(1))}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
