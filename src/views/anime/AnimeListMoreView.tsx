import { fetchAllAnimes } from "@/lib/actions";
import { GridTemplate } from "@/templates";
import { animeType } from "@/types";
import Link from "next/link";
import React from "react";
import CardView from "../CardView";

async function AnimeListMoreView() {
  const animes = await fetchAllAnimes(1);

  return (
    <GridTemplate>
      {animes.slice(0, 7).map((anime: animeType) => (
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
      <Link href="/anime">
        <div className="h-[350px] border-2 border-slate-700  hover:bg-slate-700 text-xl rounded-xl p-4 flex justify-center items-center ">
          Еще
        </div>
      </Link>
    </GridTemplate>
  );
}

export default AnimeListMoreView;
