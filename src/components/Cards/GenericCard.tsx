import React from "react";

export const GenericCard = ({
  color = "light",
  children,
}: {
  color?: string;
  children: React.ReactNode;
}) => (
  <div
    className={
      "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
      (color === "light" ? "bg-white" : "bg-blue-900 text-white")
    }
  >
    <div className="px-4 py-3 mb-0 border-0 rounded-t">{children}</div>
  </div>
);
