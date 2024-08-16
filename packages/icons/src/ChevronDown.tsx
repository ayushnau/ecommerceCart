import React from "react";
interface ChevronProps {
  className?: any;
  fillColor?: any;
}

const ChevronDown: React.FC<ChevronProps> = ({
  className = "",
  fillColor = "#878787",
}) => {
  return (
    <svg
      width="16"
      height="27"
      viewBox="0 0 16 27"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
        fill={fillColor}
        className="SV+H35"
      ></path>
    </svg>
  );
};

export default ChevronDown;
