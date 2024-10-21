import { fetchGenre } from "@/lib/actions";
import { GridTemplate } from "@/templates";
import React from "react";
import CardView from "../CardView";
import LoadMoreView from "../LoadMoreView";

type propsType = {
  genreId: string;
};

async function AnimeListByGenreView({ genreId }: propsType) {
  const data = await fetchGenre(1, genreId);

  return (
    <>
      <GridTemplate>
        {data.map((item: any) => (
          <CardView
            key={item.id}
            episodes={item.volumes}
            id={item.id}
            name={item.russian}
            imageUrl={item.image.original}
            score={item.score}
            kind={item.kind}
            isAnime
          />
        ))}
      </GridTemplate>
      <LoadMoreView genre genreId={genreId} />
    </>
  );
}

export default AnimeListByGenreView;
