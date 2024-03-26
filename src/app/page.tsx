import React from "react";
import AboutSection from "./components/about/AboutSection";
import WelcomeHeader from "./components/header/WelcomeHeader";
import Image from "next/image";
import heroBg from "@/assets/Images/Hero BG illustrations.png";

export default function Home() {
    return (
        <main>
            <Image
                alt="Hero-Background"
                src={heroBg}
                quality={100}
                placeholder="blur"
                sizes="100vw"
                priority
                style={{
                    width: "100%",
                    height: "auto",
                    position: "absolute",
                    top: 0,
                    zIndex: -10,
                }}
            />

            <WelcomeHeader />

            <AboutSection />

            <section>
                
            </section>
        </main>
    );
}
