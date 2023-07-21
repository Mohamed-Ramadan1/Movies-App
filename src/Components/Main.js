import MovieList from "./MovieList";
import WatchedSummary from "./WatchedSummary";
import WatchedMoviesList from "./WatchedMoviesList";
import Box from "./Box";

const Main = (props) => {
  return (
    <main className="main">
      <Box>
        <MovieList movies={props.movies} />
      </Box>

      <Box>
        <WatchedSummary watched={props.watched} />
        <WatchedMoviesList watched={props.watched} />
      </Box>
    </main>
  );
};

export default Main;
