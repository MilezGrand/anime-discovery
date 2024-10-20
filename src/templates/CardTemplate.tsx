import React, { ReactNode } from "react";

type propsType = {
  poster: ReactNode;
  episodes: ReactNode;
  score: ReactNode;
  name: string;
  kind: string;
};

function CardTemplate({ poster, name, kind, episodes, score }: propsType) {
  return (
    <>
      <div className="relative w-full h-[350px] rounded-xl hover:outline outline-offset-2 outline-4 outline-rose-400">
        {poster}
      </div>
      <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
            {name}
          </h2>
          <div className="py-1 px-2 bg-[#161921] rounded-sm absolute right-2 bottom-28">
            <p className="text-white text-sm font-bold capitalize">{kind}</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex flex-row gap-2 items-center">{episodes}</div>

          <div className="flex flex-row gap-2 items-center">{score}</div>
        </div>
      </div>
    </>
  );
}

export default CardTemplate;
