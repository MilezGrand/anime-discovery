"use server";

import AnimeCard from "@/components/Card";
import { AnimeProp, MangaProp } from "@/lib/types";

export const fetchAllAnimes = async (page: number) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );

  const data = await response.json();
  return data;
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
    `https://shikimori.one/api/animes/${id}/similar`
  );

  const data = await response.json();
  return data.slice(0, 4).map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
}

export const fetchSimilarManga = async (id: string) => {
  const response = await fetch(
    `https://shikimori.one/api/mangas/${id}/similar`
  );

  const data = await response.json();
  return data.slice(0, 4).map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
}

export const fetchGenre = async (page: number, id: string) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&genre=${id}`
  );

  const data = await response.json();

  return data;
}

export const fetchAllGenres = async () => {
  const response = await fetch(
    `https://shikimori.one/api/genres`
  );

  const data = await response.json();

  return data;
}

export const fetchAllMangas = async (page: number) => {
  const response = await fetch(
    `https://shikimori.one/api/mangas?page=${page}&limit=8&order=popularity`
  );

  const data = await response.json();

  return data;
}

export const fetchManga = async (id: string) => {
  const response = await fetch(
    `https://shikimori.one/api/mangas/${id}`
  );

  const data = await response.json();

  return data;
}