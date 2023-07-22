import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import { useEffect, useState } from "react";
import FeactchingErrorHandler from "./Components/FeactchingErrorHandler";

const KEY = "a48f5736";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [totalResult, setTotalResult] = useState(0);
  const [getError, setGetError] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useState("");

  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const getSearchParams = (param) => {
    setSearchParams(param);
  };

  useEffect(() => {
    const featchingData = async () => {
      try {
        setLoading(true);
        setGetError("");
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${searchParams}`
        );
        if (!response.ok) {
          setLoading(false);
          throw Error("Somthing Went wrong with fetching the data");
        }
        const data = await response.json();
        setMovies(data.Search);
        setTotalResult(data.totalResults);
        setLoading(false);
      } catch (error) {
        const messageError = error.message;
        setGetError(messageError);
        console.log(messageError);
      }
    };
    if (!searchParams.length) {
      setMovies([]);
      setGetError("");
      return;
    }

    featchingData();
  }, [searchParams, getError]);

  const getSlectedId = (id) => {
    setSelectedMovieId(id);
  };

  return (
    <>
      <Navbar movies={totalResult || 0} onSearch={getSearchParams} />
      {loading ? (
        <p className="loader">Loading...</p>
      ) : (
        <Main
          movies={movies}
          watched={watched}
          loading={loading}
          getSlectedId={getSlectedId}
          selectedMovieId={selectedMovieId}
        />
      )}
    </>
  );
}
