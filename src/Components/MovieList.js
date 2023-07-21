import React from "react";
import Movie from "./Movie";
import FeactchingErrorHandler from "./FeactchingErrorHandler";

const MovieList = ({ movies }) => {
  return (
    <ul className="list">
      {movies ? (
        movies.map((movie) => <Movie movie={movie} key={movie.imdbID} />)
      ) : (
        <FeactchingErrorHandler />
      )}
    </ul>
  );
};

export default MovieList;
