import React from "react";

export default function Button({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`w-[207px] h-10 rounded-[8px] ${className}`}>
      {children}
    </div>
  );
}
