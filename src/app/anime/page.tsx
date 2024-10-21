import { AnimeListView } from "@/views/anime";

async function AnimeListPage() {
  return (
    <>
      <h2 className="text-3xl text-white font-bold">Популярное аниме</h2>
      <AnimeListView />
    </>
  );
}

export default AnimeListPage;
