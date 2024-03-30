interface Props {
    onClick: () => void;
    size?: string;
    style?: React.CSSProperties;
}

export default function ChevronRightIcon({
    onClick,
    size,
    style,
}: Readonly<Props>) {
    const iconSize = size ?? "1.5rem";

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={iconSize}
            height={iconSize}
            viewBox="0 0 24 25"
            fill="none"
            onClick={onClick}
            style={style}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.29289 3.94523C7.68342 3.55471 8.31658 3.55471 8.70711 3.94523L16.7071 11.9452C17.0976 12.3357 17.0976 12.9689 16.7071 13.3594L8.70711 21.3594C8.31658 21.7499 7.68342 21.7499 7.29289 21.3594C6.90237 20.9689 6.90237 20.3357 7.29289 19.9452L14.5858 12.6523L7.29289 5.35945C6.90237 4.96892 6.90237 4.33576 7.29289 3.94523Z"
                fill="#458EDD"
            />
        </svg>
    );
}
