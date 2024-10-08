"use client"
import { fetchAllAnimes, fetchAllMangas, fetchGenre } from "@/lib/actions";
import React from "react";
import { useInView } from "react-intersection-observer";
import CardView from "@views/CardView";

import spinnerImage from "@public/spinner.svg";
import Icon from "@/atoms/Icon";

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
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
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
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Icon
            src={spinnerImage}
            alt="loading..."
            size={58}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
};

export default LoadMoreView;
