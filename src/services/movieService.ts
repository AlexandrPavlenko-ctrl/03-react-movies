import axios from "axios";
import { type Movie } from "../types/movie";

export interface MovieResponseData {
  results: Movie[];
  page: number;
  total_pages: number;
  total_results: number;
}

const BASE_URL = "https://api.themoviedb.org/3/search/movie";

const envVars = import.meta.env as unknown as Record<string, string>;
const TMDB_TOKEN = envVars.VITE_TMDB_TOKEN;

export const fetchMovies = async (
  query: string,
  page: number = 1,
): Promise<MovieResponseData> => {
  const response = await axios.get<MovieResponseData>(BASE_URL, {
    params: {
      query: query,
      page: page,
      language: "uk-UA",
    },
    headers: {
      Authorization: `Bearer ${TMDB_TOKEN}`,
    },
  });

  return response.data;
};

const movieService = {
  fetchMovies,
};

export default movieService;
