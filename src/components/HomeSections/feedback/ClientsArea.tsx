

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

import avatar1 from "@/assets/Images/Avatar01.png";
import avatar2 from "@/assets/Images/Avatar02.png";
import avatar3 from "@/assets/Images/Avatar03.png";
import avatar4 from "@/assets/Images/Avatar04.png";
import avatar5 from "@/assets/Images/Avatar05.png";
import avatar6 from "@/assets/Images/Avatar06.png";

export default function ClientsArea() {
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
    );
}

interface Avatar {
    id: number;
    name: string;
    position: string;
    avatar: StaticImageData;
    feedback: string;
}

const avatarArr: Avatar[] = [
    {
        id: 1,
        name: "Matt Cannon",
        position: "Marketing Coordinator",
        avatar: avatar1,
        feedback:
            "Council has transformed how our community makes decisions. The structured deliberation tools allow all voices to be heard and different perspectives to be thoughtfully considered. We're reaching well-rounded agreements that bring people together rather than further dividing us.",
    },
    {
        id: 2,
        name: "Matt Cannon",
        position: "Marketing Coordinator",
        avatar: avatar2,
        feedback:
            "Council has transformed how our community makes decisions. The structured deliberation tools allow all voices to be heard and different perspectives to be thoughtfully considered. We're reaching well-rounded agreements that bring people together rather than further dividing us.",
    },
    {
        id: 3,
        name: "Matt Cannon",
        position: "Marketing Coordinator",
        avatar: avatar3,
        feedback:
            "Council has transformed how our community makes decisions. The structured deliberation tools allow all voices to be heard and different perspectives to be thoughtfully considered. We're reaching well-rounded agreements that bring people together rather than further dividing us.",
    },
    {
        id: 4,
        name: "Matt Cannon",
        position: "Marketing Coordinator",
        avatar: avatar4,
        feedback:
            "Council has transformed how our community makes decisions. The structured deliberation tools allow all voices to be heard and different perspectives to be thoughtfully considered. We're reaching well-rounded agreements that bring people together rather than further dividing us.",
    },
    {
        id: 5,
        name: "Matt Cannon",
        position: "Marketing Coordinator",
        avatar: avatar5,
        feedback:
            "Council has transformed how our community makes decisions. The structured deliberation tools allow all voices to be heard and different perspectives to be thoughtfully considered. We're reaching well-rounded agreements that bring people together rather than further dividing us.",
    },
    {
        id: 6,
        name: "Matt Cannon",
        position: "Marketing Coordinator",
        avatar: avatar6,
        feedback:
            "Council has transformed how our community makes decisions. The structured deliberation tools allow all voices to be heard and different perspectives to be thoughtfully considered. We're reaching well-rounded agreements that bring people together rather than further dividing us.",
    },
];
