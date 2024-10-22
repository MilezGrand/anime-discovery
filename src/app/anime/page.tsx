import Text from "@/atoms/Text";
import { AnimeListView } from "@/views/anime";

async function AnimeListPage() {
  return (
    <>
      <Text weight="bold" size="3xl">
        Популярное аниме
      </Text>

      <AnimeListView />
    </>
  );
}

export default AnimeListPage;
