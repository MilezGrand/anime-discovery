export interface AnimeProp {
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
  rating: string;
  duration: number;
  genres: {
    id: number;
    russian: string;
  }[];
  studios: {
    id: number;
    image: string;
  }[]
}

export interface Genre {
  id: number;
  name: string;
  russian: string;
  kind: string;
  entry_type: string;
}