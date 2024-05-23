"use client";
import React from "react";
import FeatureTwo from "../components/FeatureTwo";
import FeatureOne from "../components/FeatureOne";
import FeatureThree from "../components/FeatureThree";
import FeatureFour from "../components/FeatureFour";

export const features = [
    {
        title: "Make reaching agreements effortless with our Council app",
        description: "Real-time conversation and discussion",
        comp: <FeatureOne />,
    },
    {
        title: "Simplify agreement processes with Council app",
        description: "Rating the options",
        comp: <FeatureTwo />,
    },
    {
        title: "Streamline agreements effortlessly with Council app",
        description: "Visualizations of data and viewpoints",
        comp: <FeatureThree />,
    },
    {
        title: "Provide objective information and data on topics with Council app",
        description: "Voting the options",
        comp: <FeatureFour />,
    },
];
