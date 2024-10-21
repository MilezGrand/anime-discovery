import { ReactNode } from "react";

type propsType = {
  logo: ReactNode;
  title: ReactNode;
};

function HeaderTemplate({ logo, title }: propsType) {
  return (
    <header className="bg-hero bg-top bg bg-cover bg-no-repeat sm:p-16 py-8 sm:py-16 px-7 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0 ">
        <div className="flex-1 flex flex-col items-center gap-5 sm:flex-row sm:gap-10 ">
          {logo}
          <h1 className="flex content-center gap-5 flex-wrap text-2xl sm:text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
            {title}
          </h1>
        </div>
    </header>
  );
}

export default HeaderTemplate;
