import { fetchAllMangas } from "@/lib/actions";
import { GridTemplate } from "@/templates";
import { mangaType } from "@/types";
import React from "react";
import CardView from "../CardView";
import LoadMoreView from "../LoadMoreView";

async function MangaListView() {
  const mangas = await fetchAllMangas(1);

  return (
    <>
      <GridTemplate>
        {mangas.map((manga: mangaType) => (
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

      <LoadMoreView manga />
    </>
  );
}

export default MangaListView;
