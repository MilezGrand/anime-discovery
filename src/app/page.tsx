import { AnimeListMoreView } from "@/views/anime";
import { MangaListMoreView } from "@/views/manga";

async function Home() {

  return (
    <>
      <h2 className="text-3xl text-white font-bold">
        Аниме <span className="red-gradient">アニメ</span>
      </h2>

      <AnimeListMoreView />

      <h2 className="text-3xl text-white font-bold">
        Манга <span className="red-gradient">マンガ</span>
      </h2>

      <MangaListMoreView />
    </>
  );
}

export default Home;
