import React from "react";
import Image from "next/image";
import { fetchAnime, fetchSimilarAnimes } from "@lib/actions";
import { animeType } from "@/types";
import Link from "next/link";
import { RATING } from "@/constants/rating";
import { ANIME_KIND } from "@/constants/kind";

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
      <div>
        <section className="sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 md:gap-4 lg:gap-8">
          <div className="md:col-span-1 lg:col-span-1">
            <Image
              src={`https://shikimori.one${data.image.original}`}
              alt={id}
              className="rounded-xl"
              width={300}
              height={300}
            />
          </div>

          <div className="lg:col-span-3 md:col-span-2 sm:col-span-1">
            <div>
              <h2 className="text-3xl text-white font-bold mb-1">
                {data.russian}
                <span className="text-gray-600 text-xl ml-3">
                  {RATING[data.rating]}
                </span>
              </h2>
            </div>

            <table className="text-lg border-separate md:border-spacing-y-4 ">
              <tbody >
                <tr className="mb-6">
                  <td className="text-gray-400">Тип</td>
                  <td className="ml-2">{ANIME_KIND[data.kind]}</td>
                </tr>
                <tr>
                  <td className="text-gray-400">Эпизоды</td>
                  <td>
                    {data.episodes_aired} / {data.episodes}
                  </td>
                </tr>
                <tr>
                  <td className="text-gray-400">Длительность эпизода</td>
                  <td>{data.duration} мин.</td>
                </tr>
                <tr>
                  <td className="text-gray-400">Даты</td>
                  <td>
                    с {airedDate} по {releasedDate}
                  </td>
                </tr>
                <tr>
                  <td className="text-gray-400">Жанры</td>
                  <td className="truncate">
                    {data.genres.map((genre) => (
                      <Link
                        href={`/genre/${genre.id}`}
                        key={genre.id}
                        className={`hover:text-blue-500 underline pr-1`}
                      >
                        {genre.russian}
                      </Link>
                    ))}
                  </td>
                </tr>

                <tr>
                  <td className="text-gray-400">Оценка</td>
                  <td>{data.score}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <p className="text-gray-400 pb-2 pt-5 text-lg ">Описание:</p>
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
