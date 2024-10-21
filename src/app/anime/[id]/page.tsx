import React from "react";
import { AnimeView } from "@/views/anime";

type propsType = {
  params: { id: string };
};

const AnimeCardPage = async ({ params }: propsType) => {
  const id = params.id;

  return <AnimeView animeId={id} />;
};

export default AnimeCardPage;
