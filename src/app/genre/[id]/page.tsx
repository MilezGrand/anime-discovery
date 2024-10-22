import { fetchAllGenres } from "@lib/actions";
import { genreType } from "@/types";
import { AnimeListByGenreView } from "@/views/anime";
import Text from "@/atoms/Text";

type propsProps = {
  params: { id: string };
};

const ListByGenrePage = async ({ params }: propsProps) => {
  const id = params.id;
  const allGenres = await fetchAllGenres();

  const genre: genreType[] = allGenres.filter(
    (genre: genreType) => genre.id == Number(id)
  );

  return (
    <>
      <Text weight="bold" size="3xl">
        Аниме жанра <span className="red-gradient">{genre[0].russian}</span>
      </Text>

      <AnimeListByGenreView genreId={id} />
    </>
  );
};

export default ListByGenrePage;
