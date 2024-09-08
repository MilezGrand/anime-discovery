import Image from "next/image";

import { MotionDiv } from "@atoms/MotionDiv";
import Link from "next/link";

import episodesImage from "@public/episodes.svg";
import starImage from "@public/star.svg";
import { animeType, mangaType } from "@/types";
import Icon from "@/atoms/Icon";

type propsType = {
  anime?: animeType;
  manga?: mangaType;
  index: number;
};

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function Card({ anime, manga, index }: propsType) {
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.15, ease: "easeInOut", duration: 0.5 }}
      className="max-w-sm rounded-sm relative w-full"
    >
      <Link href={anime ? `/anime/${anime.id}` : `/manga/${manga!.id}`}>
        <div className="relative w-full h-[350px] rounded-xl hover:outline outline-offset-2 outline-4 outline-rose-400">
          <Image
            src={`https://shikimori.one${
              anime ? anime!.image.original : manga!.image.original
            }`}
            alt={anime ? anime!.russian : manga!.russian}
            fill
            className="rounded-xl "
          />
        </div>
        <div className="py-4 flex flex-col gap-3">
          <div className="flex justify-between items-center gap-1">
            <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
              {anime ? anime!.russian : manga!.russian}
            </h2>
            <div className="py-1 px-2 bg-[#161921] rounded-sm absolute right-2 bottom-28">
              <p className="text-white text-sm font-bold capitalize">
                {anime ? anime!.kind : manga!.kind}
              </p>
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
              <p className="text-base text-white font-bold">
                {anime ? anime!.episodes_aired : manga!.volumes}
              </p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Icon
                src={starImage}
                alt="star"
                size={18}
                className="object-contain"
              />
              <p className="text-base font-bold text-[#FFAD49]">
                {anime ? anime!.score : manga!.score}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </MotionDiv>
  );
}

export default Card;
