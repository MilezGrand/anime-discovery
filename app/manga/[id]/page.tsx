import React from 'react'
import Image from "next/image";
import { fetchManga, fetchSimilarManga } from '../../../lib/actions';
import { IManga } from '@/lib/types';

interface MangaCardPageProps {
  params: { id: string };
}

const MangaCardPage = async ({ params }: MangaCardPageProps) => {
  const id = params.id;
  const manga: IManga = await fetchManga(id);
  const similarAnimes = await fetchSimilarManga(id);

  const airedDate = new Date(manga.aired_on).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' });
  const clearDescription = manga.description ? manga.description.replace(/{.*?}/g, "")
    .replace(/\[.*?\]/g, "")
    .replace('[', "")
    .replace(']', "") : 'Отсутствует';

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">{manga.russian}</h2>
      <div>
        <section className='sm:grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 flex flex-col gap-10'>
          <div className="relative w-full ">
            <Image
              src={`https://shikimori.one${manga.image?.original}`}
              alt={id}
              className="rounded-xl"
              width={500}
              height={500}
            />
          </div>

          <ul>
            <li className='text-gray-400 pb-2'>Тип: <span className='text-white'>{manga.kind.toUpperCase()}</span></li>
            {manga.chapters != 0 && <li className='text-gray-400 pb-2'>Главы: <span className='text-white'>{manga.chapters}</span></li>}
            {manga.volumes != 0 && <li className='text-gray-400 pb-2'>Тома: <span className='text-white'>{manga.volumes}</span></li>}
            <li className='text-gray-400 pb-2'>Дата выхода: <span className='text-white'>{airedDate} </span></li>
            <li className='text-gray-400 pb-2'>Жанры: <span className='text-white'>{manga.genres.map((genre) => genre.russian + ' ')}</span></li>
            {manga.rating && <li className='text-gray-400 pb-2'>Рейтинг: <span className='text-white'>{manga?.rating?.toUpperCase().replace('_', '-')}</span></li>}
            <li className='text-gray-400 pb-2'>Оценка: <span className='text-white'>{manga.score}</span></li>
            <li className='text-gray-400 pb-2'>Издатель: <span className='text-white'>{manga.publishers[0].name}</span></li>

          </ul>
        </section>

        <section >
          <p className='text-gray-400 pb-2 pt-5'>Описание:</p>
          {clearDescription}
        </section>

        {similarAnimes ? <section>
          <p className='text-gray-400 pb-2 pt-5'>Похожее:</p>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 justify-center">
            {similarAnimes}
          </div>
        </section> : null}

      </div>
    </main>
  )
}

export default MangaCardPage;