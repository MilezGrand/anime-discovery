import CardView from "@views/CardView";
import LoadMoreView from "@views/LoadMoreView";
import { fetchAllGenres, fetchGenre } from "@lib/actions";
import { genreType } from "@/types";

interface GenrePageProps {
  params: { id: string };
}

const GenrePage = async ({ params }: GenrePageProps) => {
  const id = params.id;
  const data = await fetchGenre(1, id);
  const allGenres = await fetchAllGenres();

  const genre: genreType[] = allGenres.filter(
    (genre: genreType) => genre.id == Number(id)
  );

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">
        Аниме жанра <span className="red-gradient">{genre[0].russian}</span>
      </h2>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 justify-center">
        {data.map((item: any) => (
          <CardView
            key={item.id}
            episodes={item.volumes}
            id={item.id}
            name={item.russian}
            imageUrl={item.image.original}
            score={item.score}
            kind={item.kind}
            isAnime
          />
        ))}
      </section>
      <LoadMoreView genre genreId={id} />
    </main>
  );
};

export default GenrePage;
