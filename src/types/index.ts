export type animeType = {
  id: string;
  russian: string;
  image: {
    original: string;
    preview: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
  description: string;
  aired_on: string;
  released_on: string;
  rating: 'none' | 'g' | 'pg' | 'pg_13' | 'r' | 'r_plus' | 'rx';
  duration: number;
  genres: {
    id: number;
    russian: string;
  }[];
  studios: {
    id: number;
    image: string;
  }[];
}

export type mangaType = {
  id: string;
  russian: string;
  image: {
    original: string;
    preview: string;
  };
  kind: string;
  chapters: number;
  volumes: number;
  score: string;
  description: string;
  released_on: string;
  aired_on: string;
  rating: string;
  genres: {
    id: number;
    russian: string;
  }[];
  publishers: {
    id: number;
    name: string;
  }[];
}

export type genreType = {
  id: number;
  name: string;
  russian: string;
  kind: string;
  entry_type: string;
}
