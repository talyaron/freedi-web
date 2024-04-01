import React from "react";
import Image from "next/image";
import "./clientFeedbackStyle.scss";
import backgroundShape from "@/assets/Images/Client Feedback Shape.png";

export default function ClientFeedbackSection() {
    return (
        <section className="clientFeedback">
            <div className="clientFeedback__shapesBox"></div>
            <div className="clientFeedback__feedback">
                {/* <Image
                    className="clientFeedback__feedback__background"
                    alt="client-feedback-background"
                    src={backgroundShape}
                    sizes="40vw"
                /> */}
                <h2>Client Feedback</h2>
                <p>
                    DeliCol has transformed how our community makes decisions.
                    The structured deliberation tools allow all voices to be
                    heard and different perspectives to be thoughtfully
                    considered. We're reaching well-rounded agreements that
                    bring people together rather than further dividing us..
                </p>
                <div>
                    <h4>Matt Cannon</h4>
                    <p>Marketing Coordinator</p>
                </div>
            </div>
            <div className="clientFeedback__clients"></div>
        </section>
    );
}
