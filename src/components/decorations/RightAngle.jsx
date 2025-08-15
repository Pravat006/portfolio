const RightAngle = ({ size = 48, color = "#f97316",className="" }) => (
    <svg
        className={className}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <polyline points="9 4 19 12 9 20" />
    </svg>
);
export default RightAngle;