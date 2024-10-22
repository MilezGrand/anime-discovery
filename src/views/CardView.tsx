import { MotionDiv } from "@atoms/MotionDiv";
import Link from "next/link";
import CardTemplate from "@/templates/CardTemplate";
import { animeKindType, mangaKindType } from "@/types";
import { ANIME_KIND, MANGA_KIND } from "@/constants/kind";
import Image from "next/image";
import Icon from "@/atoms/Icon";

type propsType = {
  id: string;
  imageUrl: string;
  name: string;
  kind: animeKindType | mangaKindType;
  episodes: number;
  score: string;
  isAnime?: boolean;
};

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function CardView({
  id,
  imageUrl,
  name,
  kind,
  episodes,
  score,
  isAnime = false,
}: propsType) {
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: 0.15,
        ease: "easeInOut",
        duration: 0.5,
      }}
      className="max-w-sm rounded-sm relative w-full"
    >
      <Link href={`/${isAnime ? "anime" : "manga"}/${id}`}>
        <CardTemplate
          {...{ id, name, episodes, score }}
          kind={
            isAnime
              ? ANIME_KIND[kind as animeKindType]
              : MANGA_KIND[kind as mangaKindType]
          }
          poster={
            <Image
              src={`https://shikimori.one${imageUrl}`}
              alt={name}
              fill
              className="rounded-xl "
            />
          }
          episodes={
            episodes !== 0 && (
              <>
                <Icon
                  name="episodes"
                  size={20}
                  className="object-contain"
                />
                <p className="text-base text-white font-bold">{episodes}</p>
              </>
            )
          }
          score={
            <>
              <Icon
                name='star'
                size={18}
                className="object-contain"
              />
              <p className="text-base font-bold text-[#FFAD49]">{score}</p>
            </>
          }
        />
      </Link>
    </MotionDiv>
  );
}

export default CardView;
