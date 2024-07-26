"use client";

import React, { useState } from "react";
import Image from "next/image";

// Styles
import "./videoSectionStyle.scss";

// Custom Components
import FreediLogoIcon from "@/components/icons/FreediLogoIcon";
import FreediIcon from "@/components/icons/FreediIcon";
import videoSectionPeopleImage from "@/assets/Images/VideoSectionPeople.png";
import BottomLogo from "@/components/bottomLogo/BottomLogo";

// Hooks
import useWindowSize from "@/hooks/useWindowSizeFixed";

export default function VideoSection({
	currentLang,
}: Readonly<{
	currentLang: Record<string, string>;
}>) {
	const { width } = useWindowSize();
	const [isVideoPlaying, setIsVideoPlaying] = useState(false);

	const handlePlayVideo = () => {
		console.log("play video");
		setIsVideoPlaying(true);
	};

	return (
		<section className="videoSection">
			{width <= 1200 && (
				<div className="videoSection__header">
					<h1 className="sectionHeader">
						{currentLang["How does FreeDi work?"]}
					</h1>
					<p className="sectionText">
						{
							currentLang[
								"Let us walk you through how our app works"
							]
						}
					</p>
				</div>
			)}
			<div
				className="videoSection__videoWrapper"
				onClick={handlePlayVideo}
			>
				{isVideoPlaying ? (
					<iframe
						src="https://www.youtube.com/embed/qLznfpgj1E4?wmode=transparent&autoplay=1"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						loading="eager"
						allowFullScreen
						className="video"
					/>
				) : (
					<>
						<div className="videoSection__videoWrapper__text">
							<p className="sectionText">
								{currentLang["explained in 90 second"]}
							</p>
							{width > 1200 && (
								<>
									<h1 className="sectionHeader">
										{currentLang["How does FreeDi work?"]}
									</h1>
									<p className="sectionText">
										{
											currentLang[
												"Let us walk you through how our app works"
											]
										}
									</p>
								</>
							)}
						</div>
						<div className="logo">
							<FreediLogoIcon size="1.5rem" color="white" />
							<FreediIcon
								height="1rem"
								width="3rem"
								freeColor="var(--freedi-yellow)"
								diColor="white"
							/>
						</div>
					</>
				)}
			</div>
			<Image
				alt="videoPeopleImage"
				src={videoSectionPeopleImage}
				quality={100}
				className="videoSection__peopleImage"
			/>
			<BottomLogo theme="light" />
		</section>
	);
}
