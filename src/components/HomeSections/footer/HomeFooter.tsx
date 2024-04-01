import Image from "next/image";
import React from "react";

import "./footerStyle.scss";

import backgroundShape from "@/assets/Images/Background shape 01.png";
import backgroundShape2 from "@/assets/Images/Backgroun shape 03.png";
import nature from "@/assets/Images/nature.png";
import flower2 from "@/assets/Images/flower02.png";

export default function HomeFooter() {
    return (
        <section className="footer">
            <Image
                className="footer__backgroundShapeLeft"
                alt="background-image-01"
                src={backgroundShape}
            />
            <Image
                className="footer__backgroundShapeMiddle"
                alt="background-image-03"
                src={backgroundShape2}
            />
            <Image
                className="footer__backgroundShapeRight"
                alt="background-image-01"
                src={backgroundShape}
            />
            <Image
                className="footer__flowerImage"
                alt="flower-image-02"
                src={flower2}
            />
            <Image
                className="footer__natureImage"
                alt="nature-image"
                src={nature}
            />
        </section>
    );
}
