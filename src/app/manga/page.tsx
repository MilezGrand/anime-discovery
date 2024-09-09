import CardView from "@views/CardView";
import LoadMoreView from "@views/LoadMoreView";
import { fetchAllMangas } from "@lib/actions";
import { mangaType } from "@/types";

async function Manga() {
  const mangas = await fetchAllMangas(1);

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Популярная манга</h2>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 jus">
        {mangas.map((manga: mangaType) => (
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
      </section>
      <LoadMoreView manga />
    </main>
  );
}

export default Manga;
