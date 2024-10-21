"use client";
import { fetchAllAnimes, fetchAllMangas, fetchGenre } from "@/lib/actions";
import React from "react";
import { useInView } from "react-intersection-observer";
import CardView from "@views/CardView";
import CardPlaceholder from "@/placeholders/CardPlaceholder";
import { GridTemplate } from "@/templates";

let page = 2;

type propsType = {
  anime?: boolean;
  manga?: boolean;
  genre?: boolean;
  genreId?: string;
};

const LoadMoreView = ({ anime, manga, genre, genreId }: propsType) => {
  const { ref, inView } = useInView();
  const [data, setData] = React.useState<any>([]);

  React.useEffect(() => {
    if (inView) {
      if (anime) {
        fetchAllAnimes(page).then((res) => {
          setData([...data, ...res]);
          page++;
        });
      }
      if (manga) {
        fetchAllMangas(page).then((res) => {
          setData([...data, ...res]);
          page++;
        });
      }
      if (genre) {
        fetchGenre(page, genreId!).then((res) => {
          setData([...data, ...res]);
          page++;
        });
      }
    }
  }, [inView, data]);

  return (
    <>
      <GridTemplate>
        {data.map((manga: any) => (
          <CardView
            key={manga.id}
            episodes={manga.volumes}
            id={manga.id}
            name={manga.russian}
            imageUrl={manga.image.original}
            score={manga.score}
            kind={manga.kind}
            isAnime={anime}
          />
        ))}
      </GridTemplate>

      <div ref={ref}>
        <GridTemplate>
          {Array.from({ length: 8 }).map((_, index) => (
            <CardPlaceholder key={index} />
          ))}
        </GridTemplate>
      </div>
    </>
  );
};

export default LoadMoreView;
