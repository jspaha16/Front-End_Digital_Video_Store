import React from "react";
import MovieList from "./MovieList";

import useFetch from "./useFetch";

const Home = () => {
  const {
    error,
    isPending,
    data: movies,
  } = useFetch("https://backend-moviejorid.herokuapp.com/movies");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {movies && <MovieList movies={movies.body} />}
    </div>
  );
};

export default Home;
