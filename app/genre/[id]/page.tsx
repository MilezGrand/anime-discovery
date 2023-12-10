import LoadMore from "@/components/LoadMore";
import { fetchAllGenres, fetchGenre } from "@/lib/actions";
import { Genre } from "@/lib/types";

interface Prop {
  params: { id: string };
}

const GenrePage = async ({ params }: Prop) => {
  const id = params.id;
  const data = await fetchGenre(1, id);
  const allGenres = await fetchAllGenres();

  const genre: Genre[] = allGenres.filter((genre: Genre) => genre.id == Number(id));

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Аниме жанра {genre[0].russian}</h2>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 justify-center">
        {data}
      </section>
      {/* <LoadMore fetchRequest={() => fetchGenre(1, id)}/> */}
    </main>
  );
}

export default GenrePage;