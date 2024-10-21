import { fetchAllMangas } from "@/lib/actions";
import { GridTemplate } from "@/templates";
import { mangaType } from "@/types";
import Link from "next/link";
import React from "react";
import CardView from "../CardView";

async function MangaListMoreView() {
  const mangas = await fetchAllMangas(1);

  return (
    <GridTemplate>
      {mangas.slice(0, 7).map((manga: mangaType) => (
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
      <Link href="/manga">
        <div className="h-[350px] border-2 border-slate-700  hover:bg-slate-700 text-xl rounded-xl p-4 flex justify-center items-center">
          Еще
        </div>
      </Link>
    </GridTemplate>
  );
}

export default MangaListMoreView;
