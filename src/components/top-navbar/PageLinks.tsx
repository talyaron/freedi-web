import React from "react";

import "./navBarStyle.scss";
import { usePathname } from "next/navigation";
import { useTranslate } from "@/hooks/useTranslate";

interface PageLinksProps {
    isFooter?: boolean;
}

export default function PageLinks({ isFooter }: Readonly<PageLinksProps>) {
    const pathname = usePathname();
    const { t, direction } = useTranslate();

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
                    <a
                        style={{
                            fontWeight:
                                pathname.includes(link) ||
                                (pathname === "/" && link === "home")
                                    ? 700
                                    : 100,

                            color: linkColor(link),

                            fontSize: !isFooter ? "1.1rem" : ".7rem",
                        }}
                        href={link === "home" ? "/" : `${link}`}
                    >
                        {t(link.charAt(0).toUpperCase() + link.slice(1))}
                    </a>
                </li>
            ))}
        </ul>
    );
}
