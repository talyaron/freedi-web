import avatar1 from "@/assets/Images/Avatar01.png";
import avatar2 from "@/assets/Images/Avatar02.png";
import avatar3 from "@/assets/Images/Avatar03.png";
import avatar4 from "@/assets/Images/Avatar04.png";
import avatar5 from "@/assets/Images/Avatar05.png";
import avatar6 from "@/assets/Images/Avatar06.png";
import { StaticImageData } from "next/image";

export interface Avatar {
    id: number;
    name: string;
    position: string;
    avatar: StaticImageData;
    title: string;
    feedback: string;
}

export const avatarArr: Avatar[] = [
    {
        id: 1,
        name: "Matt Cannon",
        position: "Marketing Coordinator",
        avatar: avatar1,
        title: "Client Feedback",
        feedback:
            "Council has transformed how our community makes decisions. The structured deliberation tools allow all voices to be heard and different perspectives to be thoughtfully considered. We're reaching well-rounded agreements that bring people together rather than further dividing us.",
    },
    {
        id: 2,
        name: "Kelly Smith",
        position: "Marketing Coordinator",
        avatar: avatar2,
        title: "Client Feedback",
        feedback:
            "Council has transformed how our community makes decisions. The structured deliberation tools allow all voices to be heard and different perspectives to be thoughtfully considered. We're reaching well-rounded agreements that bring people together rather than further dividing us.",
    },
    {
        id: 3,
        name: "Sara Johnson",
        position: "Marketing Coordinator",
        avatar: avatar3,
        title: "Client Feedback",
        feedback:
            "Council has transformed how our community makes decisions. The structured deliberation tools allow all voices to be heard and different perspectives to be thoughtfully considered. We're reaching well-rounded agreements that bring people together rather than further dividing us.",
    },
    {
        id: 4,
        name: "Bob Smith",
        position: "Marketing Coordinator",
        avatar: avatar4,
        title: "Client Feedback",
        feedback:
            "Council has transformed how our community makes decisions. The structured deliberation tools allow all voices to be heard and different perspectives to be thoughtfully considered. We're reaching well-rounded agreements that bring people together rather than further dividing us.",
    },
    {
        id: 5,
        name: "Mark Johnson",
        position: "Marketing Coordinator",
        avatar: avatar5,
        title: "Client Feedback",
        feedback:
            "Council has transformed how our community makes decisions. The structured deliberation tools allow all voices to be heard and different perspectives to be thoughtfully considered. We're reaching well-rounded agreements that bring people together rather than further dividing us.",
    },
    {
        id: 6,
        name: "Mitchell Cannon",
        position: "Marketing Coordinator",
        avatar: avatar6,
        title: "Client Feedback",
        feedback:
            "Council has transformed how our community makes decisions. The structured deliberation tools allow all voices to be heard and different perspectives to be thoughtfully considered. We're reaching well-rounded agreements that bring people together rather than further dividing us.",
    },
];
