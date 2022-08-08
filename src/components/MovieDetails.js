import { useParams } from "react-router-dom";
import React from "react";
import useFetch from "./useFetch";
import Button from "react-bootstrap/Button";
const MovieDetails = () => {
  const { ID } = useParams();
  const {
    data: movie,
    error,
    isPending,
  } = useFetch("http://localhost:8000/movies/" + ID);
  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {movie && (
        <div>
          <h5>{movie.body[0].title}</h5>
          <div className="movie-details-css">
            <div className="row">
              <div className="column">
                <img
                  className="movie-photo"
                  src={movie.body[0].poster}
                  alt="couldn't fetch poster"
                />
                <h6>Year: {movie.body[0].year}</h6>
                <div>
                  <Button variant="outline-primary">
                    Rent now: ${movie.body[0].rent}{" "}
                  </Button>
                  <Button variant="outline-success">
                    Buy now: ${movie.body[0].buy}
                  </Button>
                </div>
              </div>

              <div className="column">
                <img
                  className="movie-poster"
                  src={movie.body[0].bigPoster}
                  alt="couldn't fetch poster"
                />
                <p>{movie.body[0].description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
