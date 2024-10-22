import { fetchSimilarAnimes } from "@/lib/actions";
import { GridTemplate } from "@/templates";
import React from "react";
import CardView from "../CardView";

type propsType = {
  animeId: string;
};

async function SimilarAnimeView({ animeId }: propsType) {
  const similarAnimes = await fetchSimilarAnimes(animeId);

  return (
    <GridTemplate>
      {similarAnimes.map((anime) => (
        <CardView
          isAnime
          key={anime.id}
          episodes={anime.episodes}
          id={anime.id}
          name={anime.russian}
          imageUrl={anime.image.original}
          score={anime.score}
          kind={anime.kind}
        />
      ))}
    </GridTemplate>
  );
}

export default SimilarAnimeView;
