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
            <div className="clientFeedback__shapesArea">
                <div className="clientFeedback__shapesArea__shapesBox">
                    <EclipseShape01 size="2.5vw"/>
                </div>
                <div className="clientFeedback__shapesArea__shapesBox">
                    <EclipseShape02 size="1.7vw"/>
                </div>
                <div className="clientFeedback__shapesArea__shapesBox">
                    <CircleIcon size="1.5vw" />
                </div>
                <div className="clientFeedback__shapesArea__shapesBox">
                    <CircleIcon size="1vw"/>
                </div>
            </div>
            <div className="clientFeedback__feedback">
                <h2>{selectedFeedback.title}</h2>
                <p>{selectedFeedback.feedback}</p>
                <div>
                    <h4>{selectedFeedback.name}</h4>
                    <p>{selectedFeedback.position}</p>
                </div>
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
                        src={avatar.avatar}
                    />
                ))}
            </div>
        </section>
    );
}
