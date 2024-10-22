import { fetchSimilarMangas } from "@/lib/actions";
import { GridTemplate } from "@/templates";
import React from "react";
import CardView from "../CardView";

type propsType = {
  mangaId: string;
};

async function SimilarMangaView({ mangaId }: propsType) {
  const similarMangas = await fetchSimilarMangas(mangaId);

  return (
    <GridTemplate>
      {similarMangas.map((manga) => (
        <CardView
          key={manga.id}
          episodes={manga.volumes}
          id={manga.id}
          name={manga.russian}
          imageUrl={manga.image.original}
          score={manga.score}
          kind={manga.kind}
        />
      ))}
    </GridTemplate>
  );
}

export default SimilarMangaView;
