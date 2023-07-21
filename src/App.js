import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import { useEffect, useState } from "react";

const KEY = "a48f5736";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [totalResult, setTotalResult] = useState(0);
  const [loading, setLoading] = useState(true); // Add a loading state
  const [searchParams, setSearchParams] = useState("");

  const getSearchParams = (param) => {
    setSearchParams(param);
  };
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${searchParams}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.Search);
        setTotalResult(data.totalResults);
        setLoading(false); // Update loading state when data is fetched
      });
  }, [searchParams]);

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
