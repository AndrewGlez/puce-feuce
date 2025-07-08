import React from "react";

export default function Button({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      className={`w-[207px] h-10 rounded-[8px] ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
