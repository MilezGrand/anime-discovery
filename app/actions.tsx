"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

export const fetchAllAnimes = async (page: number) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );

  const data = await response.json();
  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};

export const fetchAnime = async (id: string) => {
  const response = await fetch(
    `https://shikimori.one/api/animes/${id}`
  );

  const data = await response.json();

  return data;
}

export const fetchSimilar = async (id: string) => {
  const response = await fetch(
    `https://shikimori.one/api/animes/${id}/similar?limit=4`
  );

  const data = await response.json();

  return data.slice(0, 4).map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
}