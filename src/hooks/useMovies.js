import { useEffect, useState } from "react";

const KEY = "a48f5736";
export const useMovies = (query) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const featchData = async () => {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
      );
      const data = await response.json();
      console.log(data);
    };
  }, [query]);
};
