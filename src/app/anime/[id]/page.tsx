import React from "react";
import Image from "next/image";
import { fetchAnime, fetchSimilarAnimes } from "@lib/actions";
import { animeType } from "@/types";
import Link from "next/link";

interface AnimeCardPageProps {
  params: { id: string };
}

const AnimeCardPage = async ({ params }: AnimeCardPageProps) => {
  const id = params.id;
  const data: animeType = await fetchAnime(id);
  const similarAnimes = await fetchSimilarAnimes(id);

  const airedDate = new Date(data.aired_on).toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const releasedDate = new Date(data.released_on).toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const clearDescription = data.description
    ? data.description
        .replace(/{.*?}/g, "")
        .replace(/\[.*?\]/g, "")
        .replace("[", "")
        .replace("]", "")
    : "Отсутствует";

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">{data.russian}</h2>
      <div>
        <section className="sm:grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 flex flex-col gap-10">
          <div className="relative w-full ">
            <Image
              src={`https://shikimori.one${data.image.original}`}
              alt={id}
              className="rounded-xl"
              width={500}
              height={500}
            />
          </div>

          <ul>
            <li className="text-gray-400 pb-2">
              Тип: <span className="text-white">{data.kind.toUpperCase()}</span>
            </li>
            <li className="text-gray-400 pb-2">
              Эпизоды:{" "}
              <span className="text-white">
                {data.episodes_aired} / {data.episodes}
              </span>
            </li>
            <li className="text-gray-400 pb-2">
              Длительность эпизода:{" "}
              <span className="text-white">{data.duration} мин.</span>
            </li>
            <li className="text-gray-400 pb-2">
              Даты:{" "}
              <span className="text-white">
                с {airedDate} по {releasedDate}
              </span>
            </li>
            <li className="text-gray-400 pb-2">
              Жанры:{" "}
              <span className="text-white">
                {data.genres.map((genre) => (
                  <Link
                    href={`/genre/${genre.id}`}
                    key={genre.id}
                    className={`hover:text-blue-500 underline pr-1`}
                  >
                    {genre.russian}
                  </Link>
                ))}
              </span>
            </li>
            <li className="text-gray-400 pb-2">
              Рейтинг:{" "}
              <span className="text-white">
                {data.rating.toUpperCase().replace("_", "-")}
              </span>
            </li>
            <li className="text-gray-400 pb-2">
              Оценка: <span className="text-white">{data.score}</span>
            </li>
            <li className="text-gray-400 pb-2">Студия: </li>
            <Image
              src={`https://shikimori.one${data.studios[0].image}`}
              alt={id}
              className="rounded-xl"
              width={200}
              height={200}
            />
          </ul>
        </section>

        <section>
          <p className="text-gray-400 pb-2 pt-5">Описание:</p>
          {clearDescription}
        </section>

        <section>
          <h2 className="text-3xl text-white font-bold my-4">Похожее:</h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 justify-center">
            {similarAnimes}
          </div>
        </section>
      </div>
    </main>
  );
};

export default AnimeCardPage;
