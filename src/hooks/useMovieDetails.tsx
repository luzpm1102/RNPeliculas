import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { MovieFull } from '../interfaces/movieInterfaces';
import { CreditsResponse, Cast } from '../interfaces/creditsInterface';

interface MovieDetails {
  isLoading: boolean;
  movieFull?: MovieFull;
  cast: Cast[];
}

export const useMovieDetails = (movieId: number) => {
  const [state, setstate] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    const movieDetailsPromise = await movieDB.get<MovieFull>(`/${movieId}`);
    const castPromise = await movieDB.get<CreditsResponse>(
      `/${movieId}/credits`,
    );

    const [movieDetailsResp, castPromiseResp] = await Promise.all([
      movieDetailsPromise,
      castPromise,
    ]);

    setstate({
      isLoading: false,
      movieFull: movieDetailsResp.data,
      cast: castPromiseResp.data.cast,
    });
  };
  useEffect(() => {
    getMovieDetails();
  }, []);

  return {
    ...state,
  };
};
