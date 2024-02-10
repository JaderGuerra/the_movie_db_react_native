import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { Movie, MovieDBResponse } from "../interfaces/movieInterface";

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export const useMovies = () => {
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  const [isLoading, setIsLoading] = useState(true);

  const getMovies = async () => {
    const nowPlaying = movieDB.get<MovieDBResponse>("/now_playing");
    const popular = movieDB.get<MovieDBResponse>("/popular");
    const topRated = movieDB.get<MovieDBResponse>("/top_rated");
    const upcoming = movieDB.get<MovieDBResponse>("/upcoming");

    const response = await Promise.all([
      nowPlaying,
      popular,
      topRated,
      upcoming,
    ]);

    setMoviesState({
      nowPlaying: response[0].data.results,
      popular: response[1].data.results,
      topRated: response[2].data.results,
      upcoming: response[2].data.results,
    });
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return { ...moviesState, isLoading };
};
