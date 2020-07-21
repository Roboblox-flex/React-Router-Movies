import React from "react";
import { Link } from "react-router-dom";
const MovieList = (props) => {
  const { movies } = props;
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

function MovieDetails(props) {
  const { movie } = props;
  const { title, director, metascore } = movie;
  return (
    <div className="movie-card">
      <Link to={`/movies/${movie.id}`}>
        <h2>{title}</h2>
      </Link>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}

export default MovieList;
