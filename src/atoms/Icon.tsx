import React from "react";
import Image from "next/image";
import * as icons from "@public/svgs";

type propsType = {
  name: keyof typeof icons;
  size?: number;
  className?: string;
};

function Icon({ size = 18, name, className }: propsType) {
  return (
    <Image
      {...{ className }}
      src={icons[name]}
      alt={name}
      width={size}
      height={size}
    />
  );
}

export default Icon;
