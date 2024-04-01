import React from "react";
import useTranslate from "@/hooks/useTranslate";

import "./videoSectionStyle.scss";

export default function VideoSection() {
    const { t } = useTranslate();
    const ref = React.useRef<HTMLIFrameElement>(null);

    return (
        <section className="videoSection">
            <h2 className="sectionTitle">{t("How does DeliCol work")}</h2>
            <p className="sectionText">
                {t(
                    "Let us provide an explanation of how the application operates"
                )}
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
