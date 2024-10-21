import React from "react";
import { MangaView } from "@/views/manga";

type propsType = {
  params: { id: string };
};

const MangaCardPage = async ({ params }: propsType) => {
  const id = params.id;

  return <MangaView mangaId={id} />;
};

export default MangaCardPage;
