"use client";

import React from "react";

import "./videoSectionStyle.scss";

export default function VideoSection({
    currentLang,
}: {
    currentLang: Record<string, string>;
}) {
    const ref = React.useRef<HTMLIFrameElement>(null);

    return (
        <section className="videoSection">
            <h2 className="sectionTitle">
                {currentLang["How does DeliCol work"]}
            </h2>
            <p className="sectionText">
                {
                    currentLang[
                        "Let us provide an explanation of how the application operates"
                    ]
                }
            </p>
            <iframe
                ref={ref}
                src="https://www.youtube.com/embed/qLznfpgj1E4"
                allowFullScreen
                title="DeliCol"
                className="videoSection__video"
                loading="lazy"
            />
        </section>
    );
}
