import React, { ReactNode } from "react";

type propsType = {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl"| "3xl";
  weight?: "bold" | "semibold" | "medium" | "normal";
  color?: string;
  children: ReactNode;
};

function Text({ weight = "normal", size = "base", color = 'white', children }: propsType) {
  return <div className={`font-${weight} text-${size} text-${color}`}>{children}</div>;
}

export default Text;
