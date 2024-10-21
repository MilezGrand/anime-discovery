import { fetchAllAnimes } from "@/lib/actions";
import { GridTemplate } from "@/templates";
import { animeType } from "@/types";
import React from "react";
import CardView from "../CardView";
import LoadMoreView from "../LoadMoreView";

async function AnimeListView() {
  const animes = await fetchAllAnimes(1);

  return (
    <>
      <GridTemplate>
        {animes.map((manga: animeType) => (
          <CardView
            key={manga.id}
            episodes={manga.episodes}
            id={manga.id}
            name={manga.russian}
            imageUrl={manga.image.original}
            score={manga.score}
            kind={manga.kind}
            isAnime
          />
        ))}
      </GridTemplate>

      <LoadMoreView anime />
    </>
  );
}

export default AnimeListView;
