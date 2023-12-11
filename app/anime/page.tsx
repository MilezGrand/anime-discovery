import AnimeCard from "@/components/AnimeCard";
import LoadMore from "@/components/LoadMore";
import { fetchAllAnimes } from "@/lib/actions";
import { AnimeProp } from "@/lib/types";

async function AnimePage() {
  const animes = await fetchAllAnimes(1);

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Популярное аниме</h2>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 jus">
        {animes.map((item: AnimeProp, index: number) => (
          <AnimeCard key={item.id} anime={item} index={index} />
        ))}
      </section>
      <LoadMore />
    </main>
  );
}

export default AnimePage;
