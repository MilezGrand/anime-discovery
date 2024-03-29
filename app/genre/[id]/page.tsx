import Card from "@/components/Card";
import LoadMore from "@/components/LoadMore";
import { fetchAllGenres, fetchGenre } from "@/lib/actions";
import { IGenre } from "@/lib/types";

interface GenrePageProps {
  params: { id: string };
}

const GenrePage = async ({ params }: GenrePageProps) => {
  const id = params.id;
  const data = await fetchGenre(1, id);
  const allGenres = await fetchAllGenres();

  const genre: IGenre[] = allGenres.filter((genre: IGenre) => genre.id == Number(id));

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Аниме жанра {genre[0].russian}</h2>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 justify-center">
        {data.map((item: any, index: number) => (
          <Card key={item.id} manga={item} index={index} />
        ))}
      </section>
      <LoadMore genre genreId={id} />
    </main>
  );
}

export default GenrePage;