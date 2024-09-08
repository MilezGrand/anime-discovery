import AnimeCard from "@components/Card";
import LoadMore from "@components/LoadMore";
import { fetchAllMangas } from "@lib/actions";
import { mangaType } from "@/types";

async function Manga() {
  const data = await fetchAllMangas(1);

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Популярная манга</h2>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 jus">
        {data.map((item: mangaType, index: number) => (
          <AnimeCard key={item.id} manga={item} index={index} />
        ))}
      </section>
      <LoadMore manga />
    </main>
  );
}

export default Manga;
