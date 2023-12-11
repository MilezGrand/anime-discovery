import Image from "next/image";

import { MotionDiv } from "./MotionDiv";
import Link from "next/link";
import { AnimeProp, MangaProp } from "@/lib/types";

import episodesImage from '../public/episodes.svg'
import starImage from '../public/star.svg'

interface Prop {
  anime?: AnimeProp;
  manga?: MangaProp;
  index: number;
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function AnimeCard({ anime, manga, index }: Prop) {
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.25, ease: "easeInOut", duration: 0.5 }}
      className="max-w-sm rounded relative w-full"
    >
      <Link href={`/anime/${anime ? anime!.id : manga!.id}`}>
        <div className="relative w-full h-[37vh]">
          <Image
            src={`https://shikimori.one${anime ? anime!.image.original : manga!.image.original}`}
            alt={anime ? anime!.russian : manga!.russian}
            fill
            className="rounded-xl"
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
              <Image
                src={episodesImage}
                alt="episodes"
                width={20}
                height={20}
                className="object-contain"
              />
              <p className="text-base text-white font-bold">
                {anime ? anime!.episodes_aired : manga!.volumes}
              </p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Image
                src={starImage}
                alt="star"
                width={18}
                height={18}
                className="object-contain"
              />
              <p className="text-base font-bold text-[#FFAD49]">{anime ? anime!.score : manga!.score}</p>
            </div>
          </div>
        </div>
      </Link>
    </MotionDiv>
  );
}

export default AnimeCard;
