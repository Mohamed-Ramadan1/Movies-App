import React from "react";

const Movie = ({ movie }) => {
  const movieClickHandler = (e) => console.log(movie);
  return (
    <li onClick={movieClickHandler}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
};

export default Movie;
