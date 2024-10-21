import { fetchAllGenres } from "@lib/actions";
import { genreType } from "@/types";
import { AnimeListByGenreView } from "@/views/anime";

type propsProps = {
  params: { id: string };
}

const ListByGenrePage = async ({ params }: propsProps) => {
  const id = params.id;
  const allGenres = await fetchAllGenres();

  const genre: genreType[] = allGenres.filter(
    (genre: genreType) => genre.id == Number(id)
  );

  return (
    <>
      <h2 className="text-3xl text-white font-bold">
        Аниме жанра <span className="red-gradient">{genre[0].russian}</span>
      </h2>
      <AnimeListByGenreView genreId={id} />
    </>
  );
};

export default ListByGenrePage;
