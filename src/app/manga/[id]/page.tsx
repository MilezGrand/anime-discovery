import React from "react";
import Image from "next/image";
import { fetchManga, fetchSimilarMangas } from "@lib/actions";
import { clearDescription, localizeDate } from "@/utils";
import { RATING } from "@/constants/rating";
import { MANGA_KIND } from "@/constants/kind";

type propsType = {
  params: { id: string };
};

const MangaCardPage = async ({ params }: propsType) => {
  const id = params.id;
  const manga = await fetchManga(id);
  const similarMangas = await fetchSimilarMangas(id);

  const airedDate = localizeDate(manga.aired_on);
  const description = clearDescription(manga.description);

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <div>
        <div className="sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 md:gap-4 lg:gap-8">
          <div className="md:col-span-1 lg:col-span-1">
            <Image
              src={`https://shikimori.one${manga.image.original}`}
              alt={id}
              className="rounded-xl"
              width={300}
              height={300}
            />
          </div>

          <div className="lg:col-span-3 md:col-span-2 sm:col-span-1">
            <div className="mb-4">
              <h2 className="text-3xl text-white font-bold mb-1">
                {manga.russian}
                <span className="text-gray-600 text-xl ml-3">
                  {RATING[manga.rating]}
                </span>
              </h2>
            </div>

            <div className="flex gap-8 text-lg">
              <div className="flex flex-col gap-4">
                <div className="text-gray-400">Тип</div>
                <div className="text-gray-400">Тома</div>
                <div className="text-gray-400">Главы</div>
                <div className="text-gray-400">Дата выхода</div>
                <div className="text-gray-400">Жанры</div>
                <div className="text-gray-400">Оценка</div>
              </div>
              <div className="flex flex-col gap-4">
                <div>{MANGA_KIND[manga.kind]}</div>
                <div>{manga.volumes}</div>
                <div>{manga.chapters}</div>
                <div>{airedDate}</div>
                <div>{manga.genres.map((genre) => genre.russian + " ")}</div>
                <div>{manga.score}</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-gray-400 pb-2 pt-5 text-lg ">Описание:</div>
          <div className="text-lg">{description}</div>
        </div>

        <div>
          <h2 className="text-3xl text-white font-bold my-4">Похожая манга:</h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 justify-center">
            {similarMangas}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MangaCardPage;
