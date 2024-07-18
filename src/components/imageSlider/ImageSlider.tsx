import React, { useEffect, useState } from "react";
import styles from "./imageSlider.module.scss";
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

const ImageSlider = ({
	direction,
}: Readonly<{
	direction: "rtl" | "ltr";
}>)  => {
	const [activeIndex, setActiveIndex] = useState(0);
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

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 8000);

		return () => clearInterval(interval);
	},[]);
	
	return (
		<>
			{images.map((item, index) => (
				<div
					key={index}
					className={`${index === activeIndex ? (direction === "ltr" ? styles.activeLtr : styles.activeRtl) : styles.none} ${direction === "ltr" ? styles.imageContainerLtr : styles.imageContainerRtl}`}
				>
					<Image src={item} alt={`Image ${index}`} />
				</div>
			))}
		</>
	);
};

export default ImageSlider;
