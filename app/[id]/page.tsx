import React from 'react'
import Image from "next/image";
import { fetchAnime, fetchSimilar } from '../actions';

export interface AnimeProp {
  id: string;
  russian: string;
  image: {
    original: string;
    preview: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
  description: string;
  aired_on: string;
  released_on: string;
  rating: string;
  duration: number;
  genres: {
    id: number;
    russian: string;
  }[];
  studios: {
    id: number;
    image: string;
  }[]
}

interface Prop {
  anime: AnimeProp;
  params: { id: string };
}

const AnimePage = async ({ params }: Prop) => {
  const id = params.id;
  const data: AnimeProp = await fetchAnime(id);
  const similarAnimes = await fetchSimilar(id);

  const airedDate = new Date(data.aired_on).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' });
  const releasedDate = new Date(data.released_on).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' });
  const clearDescription = data.description.replace("/\[.*?\]/g", ' ');

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">{data.russian}</h2>
      <div>
        <div className='sm:grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 flex flex-col gap-10'>
          <div className="relative w-full ">
            <Image
              src={`https://shikimori.one${data.image.original}`}
              alt={id}
              className="rounded-xl"
              width={500}
              height={500}
            />
          </div>
          <section>
            <ul>
              <li className='text-gray-400 pb-2'>Тип: <span className='text-white'>{data.kind.toUpperCase()}</span></li>
              <li className='text-gray-400 pb-2'>Эпизоды: <span className='text-white'>{data.episodes_aired} / {data.episodes}</span></li>
              <li className='text-gray-400 pb-2'>Длительность  эпизода: <span className='text-white'>{data.duration} мин.</span></li>
              <li className='text-gray-400 pb-2'>Статус: <span className='text-white'>с {airedDate} по {releasedDate}</span></li>
              <li className='text-gray-400 pb-2'>Жанры: <span className='text-white'>{data.genres.map((genre) => genre.russian).join(', ')}</span></li>
              <li className='text-gray-400 pb-2'>Рейтинг: <span className='text-white'>{data.rating.toUpperCase().replace('_', '-')}</span></li>
              <li className='text-gray-400 pb-2'>Оценка: <span className='text-white'>{data.score}</span></li>
              <li className='text-gray-400 pb-2'>Студия: <Image
                src={`https://shikimori.one${data.studios[0].image}`}
                alt={id}
                className="rounded-xl"
                width={500}
                height={500}

              /></li>
            </ul>
          </section>

        </div>
        <div >
          <p className='text-gray-400 pb-2 pt-5'>Описание:</p>
          {clearDescription}
        </div>
        <div>
          <p className='text-gray-400 pb-2 pt-5'>Похожее:</p>
          <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 justify-center">
            {similarAnimes}
          </section>
        </div>

      </div>
    </main>
  )
}

export default AnimePage;