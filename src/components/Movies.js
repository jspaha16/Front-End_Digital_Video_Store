import React, { useState } from "react";
import MovieList from "./MovieList";
import useFetch from "./useFetch";
import SearchBox from "./SearchBox";
const Movies = () => {
  const [search, setSearchValue] = useState("");
  const {
    error,
    isPending,
    data: movies,
  } = useFetch(
    `https://backend-moviejorid.herokuapp.com/movies/title?title=${search}`
  );

  return (
    <>
      <SearchBox
        className="search"
        search={search}
        setSearchValue={setSearchValue}
      />
      <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        <h2>Featured movies</h2>
        {movies && (
          <MovieList
            className="movie-center"
            movies={movies.body.filter(
              (movie) => movie.type === "movie" && movie.featured === "yes"
            )}
          />
        )}
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        <h2 className="second-title">All Movies</h2>
        {movies && (
          <MovieList
            movies={movies.body.filter((movie) => movie.type === "movie")}
          />
        )}
      </div>
    </>
  );
};

export default Movies;
