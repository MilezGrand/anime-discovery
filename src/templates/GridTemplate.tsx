import React, { ReactNode } from "react";

type propsType = {
  children: ReactNode;
};

function GridTemplate({ children }: propsType) {
  return (
    <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 jus">
      {children}
    </section>
  );
}

export default GridTemplate;
