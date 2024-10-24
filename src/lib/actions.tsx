"use server";

import { animeType, mangaType } from "@/types";

export const fetchAllAnimes = async (page: number) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );

  const data: animeType[] = await response.json();
  return data;
};

export const fetchAnime = async (id: string) => {
  const response = await fetch(`https://shikimori.one/api/animes/${id}`);
  const data: animeType = await response.json();

  return data;
};

export const fetchSimilarAnimes = async (id: string) => {
  const response = await fetch(
    `https://shikimori.one/api/animes/${id}/similar`
  );

  const data: animeType[] = await response.json();

  return data;
};

export const fetchSimilarMangas = async (id: string) => {
  const response = await fetch(
    `https://shikimori.one/api/mangas/${id}/similar`
  );

  const data: mangaType[] = await response.json();

  return data;
};

export const fetchGenre = async (page: number, id: string) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&genre=${id}`
  );

  const data = await response.json();

  return data;
};

export const fetchAllGenres = async () => {
  const response = await fetch(`https://shikimori.one/api/genres`);

  const data = await response.json();

  return data;
};

export const fetchAllMangas = async (page: number) => {
  const response = await fetch(
    `https://shikimori.one/api/mangas?page=${page}&limit=8&order=popularity`
  );

  const data: mangaType[] = await response.json();

  return data;
};

export const fetchManga = async (id: string) => {
  const response = await fetch(`https://shikimori.one/api/mangas/${id}`);

  const data: mangaType = await response.json();

  return data;
};
