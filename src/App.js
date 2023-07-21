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
  const [loading, setLoading] = useState(false); // Add a loading state
  const [searchParams, setSearchParams] = useState("");

  const getSearchParams = (param) => {
    setSearchParams(param);
  };

  useEffect(() => {
    const featchingData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${searchParams}`
        );
        if (!response.ok) {
          throw Error("Somthing Went wrong with fetching the data");
        }

        const data = await response.json();
        setMovies(data.Search);
        setTotalResult(data.totalResults);
        setLoading(false);
      } catch (error) {
        const messageError = error.message;
        console.log(messageError);
      }
    };

    featchingData();
    console.log(getError);
  }, [searchParams, getError]);

  return (
    <>
      <Navbar movies={totalResult} onSearch={getSearchParams} />
      {loading ? (
        <p className="loader">Loading...</p>
      ) : (
        <Main movies={movies} watched={watched} />
      )}
    </>
  );
}
