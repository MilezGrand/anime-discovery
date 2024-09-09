import CardView from "@views/CardView";
import LoadMoreView from "@views/LoadMoreView";
import { fetchAllAnimes } from "@lib/actions";
import { animeType } from "@/types";

async function AnimePage() {
  const animes = await fetchAllAnimes(1);

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Популярное аниме</h2>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 jus">
        {animes.map((manga: animeType) => (
          <CardView
            key={manga.id}
            episodes={manga.episodes}
            id={manga.id}
            name={manga.russian}
            imageUrl={manga.image.original}
            score={manga.score}
            kind={manga.kind}
          />
        ))}
      </section>
      <LoadMoreView anime />
    </main>
  );
}

export default AnimePage;
