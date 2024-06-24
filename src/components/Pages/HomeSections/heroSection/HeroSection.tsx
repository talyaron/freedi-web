import React from 'react'
import Image from 'next/image'
import "./heroSection.scss"

//Custom Images
import heroSectionImg from "@/assets/Images/HeroSectionImg.png"

//Custom Components
import ArrowDownIcon2 from '@/components/icons/ArrowDownIcon2'
import ContactPhoneBlueIcon from '@/components/icons/ContactPhoneBlueIcon'

function HeroSection({
    currentLang,
    direction,
}: Readonly<{
    currentLang: Record<string, string>;
    direction: "rtl" | "ltr";
}>) {
    return (
        <div className="heroSection">
            <div className="heroSection__centerArea">
                <div className="heroSection__centerArea__leftSideContent">
                    <div className="heroSection__centerArea__leftSideContent__title">
                        <h1>Genuine Agreement via Deliberation</h1>
                        <p>Building Bonds and Bridging Divides</p>
                    </div>
                    <div className="heroSection__centerArea__leftSideContent__icons">
                        <ArrowDownIcon2 />
                        <div className="heroSection__centerArea__leftSideContent__icons__phone">
                            <ContactPhoneBlueIcon />
                            <div className="heroSection__centerArea__leftSideContent__icons__phone__text">
                                <p>Call us</p>
                                <p>+972-52-607-9419</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="heroSection__centerArea__rightSideContent">
                    <Image style={{ width: "38rem", height: "35rem" }} className="heroSectionImg" src={heroSectionImg} alt="Hero Section" />
                </div>
            </div>
            <div className="heroSection__bottomArea">
                <ul>
                    <li>Consensus reaching technology</li>
                    <li>Everybody can evaluate the different options</li>
                </ul>
            </div>
        </div>
    )
}

export default HeroSection