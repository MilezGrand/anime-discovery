import React, { ReactNode } from "react";

type propsType = {
  poster: ReactNode;
  title: ReactNode;
  rating: ReactNode;
  kind: ReactNode;
  episodes: ReactNode;
  length: ReactNode;
  dates: ReactNode;
  genres: ReactNode;
  description: ReactNode;
  score: ReactNode;
};

function AnimeTemplate({
  poster,
  title,
  rating,
  kind,
  episodes,
  length,
  dates,
  genres,
  description,
  score,
}: propsType) {
  return (
    <div>
      <div className="sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 md:gap-4 lg:gap-8">
        <div className="md:col-span-1 lg:col-span-1">{poster}</div>

        <div className="lg:col-span-3 md:col-span-2 sm:col-span-1">
          <div className="mb-4">
            <h2 className="text-3xl text-white font-bold mb-1">
              {title}
              <span className="text-gray-600 text-xl ml-3">{rating}</span>
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
              <div>{kind}</div>
              <div>
                {episodes}
              </div>
              <div>{length}</div>
              <div>
                {dates}
              </div>
              <div>
                {genres}
              </div>
              <div>{score}</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-gray-400 pb-2 pt-5 text-lg ">Описание:</div>
        <div className="text-lg">{description}</div>
      </div>

    </div>
  );
}

export default AnimeTemplate;
