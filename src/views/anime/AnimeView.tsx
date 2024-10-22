import React from "react";
import { fetchAnime } from "@/lib/actions";
import { AnimeTemplate } from "@/templates";
import { localizeDate, clearDescription } from "@/utils";
import Image from "next/image";
import { RATING } from "@/constants/rating";
import { ANIME_KIND } from "@/constants/kind";
import Link from "next/link";
import SimilarAnimeView from "./SimilarAnimeView";

type propsType = {
  animeId: string;
};

async function AnimeView({ animeId }: propsType) {
  const data = await fetchAnime(animeId);

  const airedDate = localizeDate(data.aired_on);
  const releasedDate = localizeDate(data.released_on);
  const desciption = clearDescription(data.description);

  return (
    <>
      <AnimeTemplate
        poster={
          <Image
            src={`https://shikimori.one${data.image.original}`}
            alt={data.russian}
            className="rounded-xl"
            width={300}
            height={300}
          />
        }
        title={data.russian}
        rating={RATING[data.rating]}
        kind={ANIME_KIND[data.kind]}
        episodes={
          <>
            {data.episodes_aired} / {data.episodes}
          </>
        }
        length={<>{data.duration} мин.</>}
        dates={
          <>
            с {airedDate} по {releasedDate}
          </>
        }
        genres={data.genres.map((genre) => (
          <Link
            href={`/genre/${genre.id}`}
            key={genre.id}
            className={`hover:text-blue-500 underline pr-1`}
          >
            {genre.russian}
          </Link>
        ))}
        description={desciption}
        score={data.score}
      />

      <SimilarAnimeView animeId={animeId} />
    </>
  );
}

export default AnimeView;
