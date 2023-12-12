import Link from "next/link";
import { fetchAllAnimes, fetchAllMangas } from "../lib/actions";
import AnimeCard from "@/components/Card";
import { AnimeProp, MangaProp } from "@/lib/types";

const Home = async () => {
  const animes = await fetchAllAnimes(1);
  const mangas = await fetchAllMangas(1);

  return (
    <section className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Аниме</h2>

      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 items-center self-center">
        {animes.slice(0, 7).map((item: AnimeProp, index: number) => (
          <AnimeCard key={item.id} anime={item} index={index} />
        ))}
        <Link href='/anime'><div className="h-[46vh] border-2 border-slate-700  hover:bg-slate-700 text-xl rounded-lg p-4 flex justify-center items-center " >Еще</div></Link>
      </section>

      <h2 className="text-3xl text-white font-bold">Манга</h2>

      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 items-center self-center">
        {mangas.slice(0, 7).map((item: MangaProp, index: number) => (
          <AnimeCard key={item.id} manga={item} index={index} />
        ))}
        <Link href='/manga'><div className="h-[46vh] border-2 border-slate-700  hover:bg-slate-700 text-xl rounded-lg p-4 h-[37vh] flex justify-center items-center" >Еще</div></Link>
      </section>
    </section >
  );
}

export default Home;
