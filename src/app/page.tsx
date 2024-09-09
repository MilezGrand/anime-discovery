import Link from "next/link";
import { fetchAllAnimes, fetchAllMangas } from "@lib/actions";
import CardView from "@views/CardView";
import { animeType, mangaType } from "@/types";

async function Home() {
  const animes = await fetchAllAnimes(1);
  const mangas = await fetchAllMangas(1);

  return (
    <section className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">
        Аниме <span className="red-gradient">アニメ</span>
      </h2>

      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 items-start self-center">
        {animes.slice(0, 7).map((anime: animeType) => (
          <CardView
            isAnime
            key={anime.id}
            episodes={anime.episodes}
            id={anime.id}
            name={anime.russian}
            imageUrl={anime.image.original}
            score={anime.score}
            kind={anime.kind}
          />
        ))}
        <Link href="/anime">
          <div className="h-[350px] border-2 border-slate-700  hover:bg-slate-700 text-xl rounded-xl p-4 flex justify-center items-center ">
            Еще
          </div>
        </Link>
      </section>

      <h2 className="text-3xl text-white font-bold">
        Манга <span className="red-gradient">マンガ</span>
      </h2>

      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 items-start self-center">
        {mangas.slice(0, 7).map((manga: mangaType) => (
          <CardView
            key={manga.id}
            episodes={manga.volumes}
            id={manga.id}
            name={manga.russian}
            imageUrl={manga.image.original}
            score={manga.score}
            kind={manga.kind}
          />
        ))}
        <Link href="/manga">
          <div className="h-[350px] border-2 border-slate-700  hover:bg-slate-700 text-xl rounded-xl p-4 flex justify-center items-center">
            Еще
          </div>
        </Link>
      </section>
    </section>
  );
}

export default Home;
