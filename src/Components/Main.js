import MovieList from "./MovieList";
import WatchedSummary from "./WatchedSummary";
import WatchedMoviesList from "./WatchedMoviesList";
import Box from "./Box";
import SelectedMovie from "./SelectedMovie";

const Main = (props) => {
  return (
    <main className="main">
      <Box>
        <MovieList movies={props.movies} getSlectedId={props.getSlectedId} />
      </Box>

      <Box>
        {props.selectedMovieId ? (
          <SelectedMovie selectedId={props.selectedMovieId} />
        ) : (
          <>
            <WatchedSummary watched={props.watched} />
            <WatchedMoviesList watched={props.watched} />
          </>
        )}
      </Box>
    </main>
  );
};

export default Main;
