"use client";
import { fetchAllAnimes, fetchAllMangas, fetchGenre } from "@/lib/actions";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";
import AnimeCard from "./Card";

import spinnerImage from '@/public/spinner.svg'

let page = 2;

interface Props {
  anime?: boolean;
  manga?: boolean;
  genre?: boolean;
  genreId?: string;
}

export type AnimeCard = JSX.Element;

const LoadMore = ({ anime, manga, genre, genreId }: Props) => {
  const { ref, inView } = useInView();
  const [data, setData] = React.useState<AnimeCard[]>([]);

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
        {data.map((item: any, index: number) => (
          <AnimeCard key={item.id} manga={item} index={index} />
        ))}
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src={spinnerImage}
            alt="загрузка"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
