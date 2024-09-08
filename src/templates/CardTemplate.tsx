import Icon from "@/atoms/Icon";
import React from "react";
import Image from "next/image";
import episodesImage from "@public/episodes.svg";
import starImage from "@public/star.svg";

type propsType = {
  imageUrl: string;
  name: string;
  kind: string;
  episodes: number;
  score: string;
};

function CardTemplate({
  imageUrl,
  name,
  kind,
  episodes,
  score,
}: propsType) {
  return (
    <>
      <div className="relative w-full h-[350px] rounded-xl hover:outline outline-offset-2 outline-4 outline-rose-400">
        <Image
          src={`https://shikimori.one${imageUrl}`}
          alt={name}
          fill
          className="rounded-xl "
        />
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
          <div className="flex flex-row gap-2 items-center">
            <Icon
              src={episodesImage}
              alt="episodes"
              size={20}
              className="object-contain"
            />
            <p className="text-base text-white font-bold">{episodes}</p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Icon
              src={starImage}
              alt="star"
              size={18}
              className="object-contain"
            />
            <p className="text-base font-bold text-[#FFAD49]">{score}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardTemplate;
