import React, { useState } from "react";
import MovieList from "./MovieList";
import WatchedSummary from "./WatchedSummary";
import WatchedMoviesList from "./WatchedMoviesList";
import Box from "./Box";

const Main = (props) => {
  const [movies, setMovies] = useState(props.tempMovieData);
  const [watched, setWatched] = useState(props.tempWatchedData);

  return (
    <main className="main">
      <Box>
        <MovieList movies={movies} />
      </Box>

      <Box>
        <>
          <WatchedSummary watched={watched} />
          <WatchedMoviesList watched={watched} />
        </>
      </Box>
    </main>
  );
};

export default Main;
