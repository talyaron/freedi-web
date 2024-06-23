import React from 'react'

//Custom Components
import ArrowDownIcon from '@/components/icons/ArrowDownIcon'
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
                <div className="heroSection__centerArea__rightSideContent">
                </div>
                <div className="heroSection__centerArea__leftSideContent">
                    <div className="heroSection__centerArea__leftSideContent__title">
                        <h1>Genuine Agreement via Deliberation</h1>
                        <p>Building Bonds and Bridging Divides</p>
                    </div>
                    <div className="heroSection__centerArea__leftSideContent__icons">
                        <ArrowDownIcon />
                        <ContactPhoneBlueIcon />
                        <p style={{ direction }}>
                            {
                                currentLang["Call us"]
                            }
                        </p>
                        <p>+972-52-607-9419</p>
                    </div>
                </div>
            </div>
            <div className="heroSection__bottomArea">
                <p>Consensus reaching technology</p>
                <p>Everybody can evaluate the different options</p>
            </div>
        </div>
    )
}

export default HeroSection