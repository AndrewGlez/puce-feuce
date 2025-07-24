import React from "react";

type FileIconProps = {
  color: string;
  size?: number;
};

const FileIcon: React.FC<FileIconProps> = ({ color, size = 32 }) => (
  <svg width={size} height={size} fill="none" viewBox="0 0 24 24">
    <rect width="24" height="24" rx="6" fill={color} />
    <path
      d="M8.5 7.5h7M8.5 10.5h7M8.5 13.5h4"
      stroke="#fff"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <rect
      x="5"
      y="5"
      width="14"
      height="14"
      rx="2"
      stroke="#fff"
      strokeWidth="1.5"
    />
  </svg>
);

export default FileIcon;
