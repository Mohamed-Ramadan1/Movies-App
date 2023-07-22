import React from "react";
import Movie from "./Movie";
import FeactchingErrorHandler from "./FeactchingErrorHandler";

const MovieList = ({ movies, getSlectedId }) => {
  return (
    <ul className="list list-movies">
      {movies ? (
        movies.map((movie) => (
          <Movie movie={movie} key={movie.imdbID} getSlectedId={getSlectedId} />
        ))
      ) : (
        <FeactchingErrorHandler />
      )}
    </ul>
  );
};

export default MovieList;
