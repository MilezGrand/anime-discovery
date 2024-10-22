import Text from "@/atoms/Text";
import MangaListView from "@/views/manga/MangaListView";

async function MangaListPage() {
  return (
    <>
      <Text weight="bold" size="3xl">
        Популярная манга
      </Text>

      <MangaListView />
    </>
  );
}

export default MangaListPage;
