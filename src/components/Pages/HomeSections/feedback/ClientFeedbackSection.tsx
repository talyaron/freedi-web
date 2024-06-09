"use client";

import React, { useState } from "react";
import "./clientFeedbackStyle.scss";
import Image from "next/image";
import { Avatar, avatarArr } from "./data";
import CircleIcon from "@/components/icons/CircleIcon";
import EclipseShape01 from "@/components/icons/EclipseShape01";
import EclipseShape02 from "@/components/icons/EclipseShape02";

export default function ClientFeedbackSection() {
    const [selectedFeedback, setSelectedFeedback] = useState(avatarArr[0]);
    const [avatarArray, setAvatarArray] = useState(avatarArr);

    const handleClick = (clickedAvatar: Avatar) => {
        const findSelected = avatarArray.indexOf(selectedFeedback);
        const findClicked = avatarArray.indexOf(clickedAvatar);

        if (findSelected === undefined || findClicked === undefined) return;

        const newAvatarArray = [...avatarArray];

        newAvatarArray[findSelected] = clickedAvatar;
        newAvatarArray[findClicked] = selectedFeedback;

        setSelectedFeedback(clickedAvatar);

        setAvatarArray(newAvatarArray);
    };

    return (
        <section className="clientFeedback">
            <h1 className="title">Our clients tell about us</h1>
            <p className="body">{selectedFeedback.feedback}</p>
            <div>
                <p className="name">{selectedFeedback.name}</p>
                <p className="position">{selectedFeedback.position}</p>
            </div>
            <div className="clientFeedback__shapesBox shapeOne">
                <EclipseShape01 size="2vw" />
            </div>
            <div className="clientFeedback__shapesBox shapeTwo">
                <EclipseShape02 size="1.3vw" />
            </div>
            <div className="clientFeedback__shapesBox shapeThree">
                <CircleIcon size="1vw" />
            </div>

            <div className="clientFeedback__clients">
                {avatarArray.map((avatar) => (
                    <Image
                        key={avatar.id}
                        className={
                            selectedFeedback.id === avatar.id
                                ? " clientFeedback__clients__client--selected"
                                : "clientFeedback__clients__client"
                        }
                        onClick={() => handleClick(avatar)}
                        alt="client-avatar"
                        quality={100}
                        src={avatar.avatar}
                    />
                ))}
            </div>
        </section>
    );
}
