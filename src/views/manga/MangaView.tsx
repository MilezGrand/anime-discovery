import React from "react";
import { fetchManga, fetchSimilarMangas } from "@/lib/actions";
import { GridTemplate, MangaTemplate } from "@/templates";
import { localizeDate, clearDescription } from "@/utils";
import Image from "next/image";
import { MANGA_KIND } from "@/constants/kind";
import { RATING } from "@/constants/rating";

type propsType = {
  mangaId: string;
};

async function MangaView({ mangaId }: propsType) {
  const manga = await fetchManga(mangaId);
  const similarMangas = await fetchSimilarMangas(mangaId);

  const airedDate = localizeDate(manga.aired_on);
  const description = clearDescription(manga.description);

  return (
    <>
      <MangaTemplate
        poster={
          <Image
            src={`https://shikimori.one${manga.image.original}`}
            alt={manga.russian}
            className="rounded-xl"
            width={300}
            height={300}
          />
        }
        title={manga.russian}
        rating={RATING[manga.rating]}
        kind={MANGA_KIND[manga.kind]}
        volumes={manga.volumes}
        chapters={manga.chapters}
        airedDate={airedDate}
        genres={manga.genres.map((genre) => genre.russian + " ")}
        score={manga.score}
        description={description}
      />
      <GridTemplate>{similarMangas}</GridTemplate>
    </>
  );
}

export default MangaView;
