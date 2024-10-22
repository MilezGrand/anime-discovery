import Text from "@/atoms/Text";
import { AnimeListMoreView } from "@/views/anime";
import { MangaListMoreView } from "@/views/manga";

async function Home() {
  return (
    <>
      <Text weight="bold" size="3xl">
        Аниме <span className="red-gradient">アニメ</span>
      </Text>

      <AnimeListMoreView />

      <Text weight="bold" size="3xl">
        Манга <span className="red-gradient">マンガ</span>
      </Text>

      <MangaListMoreView />
    </>
  );
}

export default Home;
