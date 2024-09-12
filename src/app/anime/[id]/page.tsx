import React from "react";
import Image from "next/image";
import { fetchAnime, fetchSimilarAnimes } from "@lib/actions";
import { animeType } from "@/types";
import Link from "next/link";
import { RATING } from "@/constants/rating";
import { ANIME_KIND } from "@/constants/kind";
import { clearDescription, localizeDate } from "@/utils";

type propsType = {
  params: { id: string };
}

const AnimeCardPage = async ({ params }: propsType) => {
  const id = params.id;
  const data = await fetchAnime(id);
  const similarAnimes = await fetchSimilarAnimes(id);

  const airedDate = localizeDate(data.aired_on);
  const releasedDate = localizeDate(data.released_on);
  const desciption = clearDescription(data.description);

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <div>
        <div className="sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 md:gap-4 lg:gap-8">
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
            <div className="mb-4">
              <h2 className="text-3xl text-white font-bold mb-1">
                {data.russian}
                <span className="text-gray-600 text-xl ml-3">
                  {RATING[data.rating]}
                </span>
              </h2>
            </div>

            <div className="flex gap-8 text-lg">
              <div className="flex flex-col gap-4">
                <div className="text-gray-400">Тип</div>
                <div className="text-gray-400">Эпизоды</div>
                <div className="text-gray-400">Длительность эпизода</div>
                <div className="text-gray-400">Даты</div>
                <div className="text-gray-400">Жанры</div>
                <div className="text-gray-400">Оценка</div>
              </div>
              <div className="flex flex-col gap-4">
                <div>{ANIME_KIND[data.kind]}</div>
                <div>
                  {data.episodes_aired} / {data.episodes}
                </div>
                <div>{data.duration} мин.</div>
                <div>
                  {" "}
                  с {airedDate} по {releasedDate}
                </div>
                <div>
                  {data.genres.map((genre) => (
                    <Link
                      href={`/genre/${genre.id}`}
                      key={genre.id}
                      className={`hover:text-blue-500 underline pr-1`}
                    >
                      {genre.russian}
                    </Link>
                  ))}
                </div>
                <div>{data.score}</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-gray-400 pb-2 pt-5 text-lg ">Описание:</div>
          <div className="text-lg">{desciption}</div>
        </div>

        <div>
          <h2 className="text-3xl text-white font-bold my-4">Похожее аниме:</h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 justify-center">
            {similarAnimes}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AnimeCardPage;
