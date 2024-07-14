"use client";

import React, { useState } from "react";

import style from "./videoSectionStyle.module.scss";
import FreediLogoIcon from "@/components/icons/FreediLogoIcon";
import FreediIcon from "@/components/icons/FreediIcon";
import videoSectionImage from "@/assets/Images/VideoSectionImage.png";
import videoSectionPeopleImage from "@/assets/Images/VideoSectionPeople.png";
import Image from "next/image";
import useWindowSizeFixed from "@/hooks/useWindowSizeFixed";

export default function VideoSection({
	currentLang,
	direction,
}: Readonly<{
    currentLang: Record<string, string>;
    direction: "rtl" | "ltr";
}>) {
    const { width } = useWindowSizeFixed();
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

	const handlePlayVideo = () => {
		setIsVideoPlaying(true);
	};

    if (width == undefined) {
        return (
            <section className={style.videoSection}></section>
        )
    }

    return (
        <section className={style.videoSection} style={{ direction }}>
            {width! > 1200 ? (
                <div className={style.videoWrapper}>
                    <iframe
                        src="https://www.youtube.com/embed/qLznfpgj1E4?wmode=transparent&autoplay=1"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        loading="lazy"
                        allowFullScreen
                        className={isVideoPlaying ? `${style.videoPlayer} ${style.videoImage}` : style.none}
                    ></iframe>
                    <Image
                        alt="videoImage"
                        src={videoSectionImage}
                        quality={100}
                        className={isVideoPlaying ? style.none : style.videoImage}
                        onClick={() => handlePlayVideo()}
                    />
                    <div className={isVideoPlaying ? style.none : style.textWrapper}>
                        <p className={style.timerP}>
                            {currentLang["explained in 90 second"]}
                        </p>
                        <h1 className={style.header}>
                            {currentLang["How does FreeDi work?"]}
                        </h1>
                        <p className={style.underHeaderP}>
                            {currentLang["Let us walk you through how our app works"]}
                        </p>
                    </div>
                    <div className={isVideoPlaying ? style.none : style.logoWrapper}>
                        <FreediLogoIcon size={"1.9rem"} color={"white"} />
                        <FreediIcon
                            height="1.9rem"
                            width="4.1rem"
                            freeColor="var(--freedi-yellow)"
                            diColor="white"
                        />
                    </div>
                    <Image
                        alt="videoPeopleImage"
                        src={videoSectionPeopleImage}
                        quality={100}
                        className={style.videoPeopleImage}
                    />
                </div>
            ) : (
                <>
                    <div className={style.textWrapper}>
                        <h1 className={style.header}>{currentLang["How does FreeDi work?"]}</h1>
                        <p className={style.underHeaderP}>
                            {currentLang["Let us walk you through how our app works"]}
                        </p>
                    </div>
                    <div className={style.videoWrapper}>
                        <iframe
                            src="https://www.youtube.com/embed/qLznfpgj1E4?wmode=transparent&autoplay=1"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            loading="lazy"
                            allowFullScreen
                            className={isVideoPlaying ? `${style.videoPlayer} ${style.videoImage}` : style.none}
                        ></iframe>
                        <Image
                            alt="videoImage"
                            src={videoSectionImage}
                            quality={100}
                            className={isVideoPlaying ? style.none : style.videoImage}
                            onClick={() => handlePlayVideo()}
                        />
                        <p className={isVideoPlaying ? style.none : style.timerP}>
                            {currentLang["explained in 90 second"]}
                        </p>
                        <div className={isVideoPlaying ? style.none : style.logoWrapper}>
                            <FreediLogoIcon size={"1.459rem"} color={"white"} />
                            <FreediIcon
                                height="1rem"
                                width="3.22rem"
                                freeColor="var(--freedi-yellow)"
                                diColor="white"
                            />
                        </div>
                        <Image
                            alt="videoPeopleImage"
                            src={videoSectionPeopleImage}
                            quality={100}
                            className={style.videoPeopleImage}
                        />
                    </div>
                </>
            )}
        </section>
    );
}
