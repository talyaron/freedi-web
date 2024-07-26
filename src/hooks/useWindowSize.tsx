"use client";

import { useState, useEffect } from "react";

interface WindowSize {
	width: number;
	height: number;
	xsScreen: boolean;
	smScreen: boolean;
	mdScreen: boolean;
	lgScreen: boolean;
	xlScreen: boolean;
	xxlScreen: boolean;
}

const useWindowSize = (): WindowSize => {
	const [windowSize, setWindowSize] = useState<WindowSize>({
		width: 0,
		height: 0,
		xsScreen: true,
		smScreen: false,
		mdScreen: false,
		lgScreen: false,
		xlScreen: false,
		xxlScreen: false,
	});

	useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
				xsScreen: window.innerWidth < 576,
				smScreen: window.innerWidth >= 576,
				mdScreen: window.innerWidth >= 768,
				lgScreen: window.innerWidth >= 1024,
				xlScreen: window.innerWidth >= 1200,
				xxlScreen: window.innerWidth >= 1440,
			});
		}

		window.addEventListener("resize", handleResize);

		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowSize;
};

export default useWindowSize;
