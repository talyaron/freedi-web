"use client";

import { useState, useEffect } from "react";

function useWindowSize() {
    const [windowDimensions, setWindowDimensions] = useState({
        width: 360,
        height: 820,
    });

    useEffect(() => {
        if (typeof window === "undefined") return;

        const handleResize = () => {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        // Listen for window resize events
        window.addEventListener("resize", handleResize);

        handleResize();

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); // Empty dependency array means this effect runs once after the initial render

    return windowDimensions;
}

export default useWindowSize;
