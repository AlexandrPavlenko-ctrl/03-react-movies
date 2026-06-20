import axios, { type AxiosResponse } from "axios";
import type { MovieResponseData } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3/search/movie";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TMDB_TOKEN = (import.meta as any).env.VITE_TMDB_TOKEN;

export const fetchMovies = async (
  query: string,
  page: number = 1,
): Promise<MovieResponseData> => {
  const response: AxiosResponse<MovieResponseData> = await axios.get(BASE_URL, {
    params: {
      query: query,
      page: page,
      language: "uk-UA", // Поиск результатов на украинском языке
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
