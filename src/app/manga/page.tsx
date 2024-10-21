import MangaListView from "@/views/manga/MangaListView";

async function MangaListPage() {
  return (
    <>
      <h2 className="text-3xl text-white font-bold">Популярная манга</h2>
      <MangaListView />
    </>
  );
}

export default MangaListPage;
