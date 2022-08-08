import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <div className="home-page">
      {movies.map((movie) => (
        <div className="movie-preview" key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <h5>{movie.title}</h5>
            <img
              className="movie-photo"
              src={movie.poster}
              alt="couldn't fetch poster"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
