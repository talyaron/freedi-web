import React, { useEffect, useState, useRef } from "react";
import "./imageSlider.scss";
import Image from "next/image";
import image1 from "@/assets/Images/1.png";
import image2 from "@/assets/Images/2.png";
import image3 from "@/assets/Images/3.png";
import image4 from "@/assets/Images/4.png";
import image5 from "@/assets/Images/5.png";
import image6 from "@/assets/Images/6.png";
import image7 from "@/assets/Images/7.png";
import image8 from "@/assets/Images/8.png";
import image9 from "@/assets/Images/9.png";
import image10 from "@/assets/Images/10.png";
import image11 from "@/assets/Images/11.png";
import image12 from "@/assets/Images/12.png";
import image13 from "@/assets/Images/13.png";
import image14 from "@/assets/Images/14.png";
import useWindowSize from "@/hooks/useWindowSize";

const images = [
	image1,
	image2,
	image3,
	image4,
	image5,
	image6,
	image7,
	image8,
	image9,
	image10,
	image11,
	image12,
	image13,
	image14,
];

const ImageSlider = ({ direction }: { direction: "ltr" | "rtl" }) => {
	const { width } = useWindowSize();
	const sliderRef = useRef<HTMLDivElement | null>(null);
	const [activeIndex, setActiveIndex] = useState(0);
	const [sliderHeight, setSliderHeight] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		if (sliderRef.current) {
			if (width < 1024) {
				setSliderHeight(sliderRef.current?.clientHeight - 50);
			} else {
				setSliderHeight(sliderRef.current?.clientHeight);
			}
		}
	}, [width]);

	const getClassName = (
		direction: string,
		index: number,
		activeIndex: number,
	) => {
		if (direction === "rtl") {
			return `slideRtl ${index === activeIndex ? "activeRtl" : ""}`;
		} else {
			return `slideLtr ${index === activeIndex ? "activeLtr" : ""}`;
		}
	};

	return (
		<div className="slider" ref={sliderRef}>
			{images.map((item, index) => (
				<Image
					key={index}
					src={item}
					alt={`Image ${index}`}
					className={getClassName(direction, index, activeIndex)}
					quality={100}
					style={{
						height: `${sliderHeight - 30}px`,
					}}
				/>
			))}
		</div>
	);
};

export default ImageSlider;
