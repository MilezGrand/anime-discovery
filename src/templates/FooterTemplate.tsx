import React, { ReactNode } from "react";

type propsType = {
  title: string;
  logo: ReactNode;
  socials: ReactNode;
};

function FooterTemplate({ title, logo, socials }: propsType) {
  return (
    <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
      <p className="text-base font-bold text-white">{title}</p>
      {logo}
      <div className="flex items-center gap-6">{socials}</div>
    </footer>
  );
}

export default FooterTemplate;
