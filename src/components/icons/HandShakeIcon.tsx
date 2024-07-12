import React from "react";

interface Props {
    remSize: string;
}

export default function HandShakeIcon({ remSize }: Props) {
	const height = Number(remSize.split("rem")[0]) * 0.75;
    
	return (
		<svg
			width={remSize}
			height={`${height}rem`}
			viewBox="0 0 71 55"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M60.5777 29.2946C60.5777 29.2946 59.8897 31.0449 59.1788 31.6608L57.274 33.3574L31.0223 14.8294C30.0285 15.0721 29.0861 15.4904 28.2394 16.0646L20.2925 20.6185C19.7194 20.9172 19.0781 21.0609 18.4323 21.0352C16.0118 21.0005 13.7001 20.0235 11.9884 18.3118C11.8995 18.2124 11.8321 18.0957 11.7905 17.969C11.7488 17.8423 11.7338 17.7084 11.7464 17.5756C11.759 17.4429 11.7988 17.3141 11.8636 17.1975C11.9283 17.0809 12.0164 16.9789 12.1224 16.898L25.1887 7.96889C26.4306 7.34875 27.7789 6.97 29.1621 6.85275L48.3448 2.98347C48.9207 2.82467 52.5989 2.95012 54.1672 3.01201C54.625 3.03007 55.061 3.20723 55.4038 3.51116L69.0773 15.6364C69.8744 16.3432 69.9775 17.5508 69.3118 18.3826L60.5777 29.2946Z"
				fill="#FF7373"
			/>
			<path
				d="M58.3309 39.2358C58.3326 39.7651 58.2281 40.2894 58.0236 40.7776C57.8191 41.2658 57.5188 41.7081 57.1404 42.0782C56.4404 42.7268 55.5371 43.1126 54.5846 43.1696C53.632 43.2266 52.6891 42.9513 51.9168 42.3907H51.8275L49.7143 40.9025C50.2246 41.5917 50.501 42.4261 50.5031 43.2836C50.5097 43.4125 50.5097 43.5417 50.5031 43.6706C50.4347 44.3221 50.2045 44.9462 49.8334 45.4861C49.3935 46.1098 48.7839 46.5941 48.0769 46.8816C47.37 47.1692 46.5954 47.2478 45.845 47.1083C45.3087 46.9962 44.8018 46.7731 44.3569 46.4535L43.2705 45.6945L42.1097 44.876C42.332 45.2641 42.4879 45.6866 42.571 46.1261C42.7226 46.9103 42.6342 47.722 42.3176 48.4553C42.0009 49.1886 41.4706 49.8094 40.7958 50.2368C40.121 50.6642 39.333 50.8782 38.5347 50.8511C37.7364 50.824 36.9649 50.5569 36.3206 50.0846L34.9218 49.1024C35.1092 49.5762 35.2051 50.0812 35.2045 50.5906C35.2045 50.5906 35.2045 50.7246 35.2045 50.7841C35.1684 51.6134 34.8716 52.4102 34.3562 53.061C33.6741 53.8555 32.717 54.3629 31.6765 54.4816C30.6361 54.6003 29.5893 54.3214 28.7458 53.7009L14.5634 43.8789C14.2955 43.6854 11.4531 40.6942 11.4531 40.6942L1.86913 30.5001C1.13945 29.7936 0.658967 28.8692 0.5 27.866L10.0244 2.01622C10.3928 1.36867 10.9352 0.837247 11.5901 0.482163C12.245 0.127079 12.9863 -0.0374681 13.73 0.00716553L31.0525 1.10842C31.5367 1.14072 32.0109 1.26179 32.4514 1.46559C32.714 1.53821 32.9684 1.63796 33.2103 1.76323L35.1301 2.93889L27.8677 4.42708C26.3939 4.57646 24.9712 5.04902 23.7008 5.81109L10.6345 14.7402C10.2407 15.0012 9.9052 15.3408 9.64909 15.7378C9.39296 16.1348 9.2218 16.5805 9.14636 17.0469C9.07006 17.5397 9.094 18.0428 9.21674 18.5261C9.33948 19.0094 9.55851 19.4629 9.86069 19.8596C10.9504 21.0301 12.2672 21.9664 13.7308 22.6112C15.1943 23.2559 16.7739 23.5957 18.3731 23.6098C19.4821 23.651 20.5819 23.394 21.5578 22.8657L29.4899 18.3267L30.5614 17.7166L57.1999 36.4529C57.3181 36.5739 57.4275 36.7032 57.5273 36.8398C58.0469 37.5307 58.3288 38.3713 58.3309 39.2358Z"
				fill="#5699E9"
			/>
		</svg>
	);
}
