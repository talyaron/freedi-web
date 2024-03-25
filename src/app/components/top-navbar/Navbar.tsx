"use client";

import React from "react";
import styles from "./style.module.scss";
import LogoIcon from "../icons/LogoIcon";
import { usePathname } from "next/navigation";
import RoundedButton from "../buttons/RoundedButton";

export default function Navbar() {
    const pathname = usePathname();

    const links = ["home", "about", "blog", "pricing"];

    return (
        <nav className={styles.navbar}>
            <div className={styles.logoBox}>
                <LogoIcon size="2rem" />
                <p>DeliCol</p>
            </div>
            <ul>
                {links.map((link) => (
                    <li key={link}>
                        <a
                            style={{
                                fontWeight:
                                    pathname.includes(link) ||
                                    (pathname === "/" && link === "home")
                                        ? 900
                                        : 500,
                            }}
                            href={link === "home" ? "/" : `${link}`}
                        >
                            {link.charAt(0).toUpperCase() + link.slice(1)}
                        </a>
                    </li>
                ))}
            </ul>
            <RoundedButton text="Contact us" />
        </nav>
    );
}
