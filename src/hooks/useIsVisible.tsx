import { useState, useEffect } from "react";
import useWindowSize from "./useWindowSize";

export const useIsVisible = (
	ref: React.RefObject<HTMLElement>,
	threshold = 0.1,
): boolean => {
	const [isVisible, setIsVisible] = useState(false);
	const { width } = useWindowSize();

	const isSmallScreen = width < 576;
	const isMediumScreen = width >= 576 && width < 1024;
	
	if (isSmallScreen) {
		threshold = 0.25;
	} else if (isMediumScreen) {
		threshold = 0.2;
	} else {
		threshold = 0.1;
	}

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					setIsVisible(entry.isIntersecting);
				});
			},
			{
				root: null,
				rootMargin: "0px",
				threshold,
			},
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, [ref, threshold]);

	return isVisible;
};
