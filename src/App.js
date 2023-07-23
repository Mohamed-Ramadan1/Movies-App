import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import { useEffect, useState } from "react";

const KEY = "a48f5736";

export default function App() {
  const [movies, setMovies] = useState([]);
  // const [watched, setWatched] = useState([]);
  const [totalResult, setTotalResult] = useState(0);
  const [getError, setGetError] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useState("");
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [watched, setWatched] = useState(function () {
    const storedValues = localStorage.getItem("Watched");
    return JSON.parse(storedValues);
  });

  const getSearchParams = (param) => {
    setSearchParams(param);
  };

  const getSlectedId = (id) => {
    setSelectedMovieId((current) => (id === current ? null : id));
  };
  const closeMoveiHandler = () => {
    setSelectedMovieId(null);
  };

  //adding movies to the watching list.
  const handelWatchingMovies = (movie) => {
    setWatched((watched) => [...watched, movie]);
  };

  const handelDeleteMoveWatched = (id) => {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  };

  useEffect(() => {
    localStorage.setItem("Watched", JSON.stringify(watched));
  }, [watched]);

  useEffect(() => {
    const controller = new AbortController();
    const featchingData = async () => {
      try {
        setLoading(true);
        setGetError("");
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${searchParams}`,
          { signal: controller.signal }
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
      }
    };
    if (!searchParams.length) {
      setMovies([]);
      setGetError("");
      return;
    }

    featchingData();
    return function () {
      controller.abort();
    };
  }, [searchParams, getError]);

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
          onCloseMovei={closeMoveiHandler}
          onAddToWatched={handelWatchingMovies}
          onDeleteWatched={handelDeleteMoveWatched}
        />
      )}
    </>
  );
}
