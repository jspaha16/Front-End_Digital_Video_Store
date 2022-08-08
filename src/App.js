import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import TopNavbar from "./components/TopNavbar";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import Movies from "./components/Movies";
import TvShows from "./components/TvShows";
import Footer from "./components/Footer";
import About from "./components/About";
import Register from "./components/Register";
import SignIn from "./components/SignIn";
import NotFound from "./components/NotFound";
import React, { useState, useEffect } from "react";
function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://backend-moviejorid.herokuapp.com/movies")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(json.body);
        setMovies(json.body);
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      });
  }, []);

  return (
    <div className="app-body">
      <Router>
        <div className="App">
          <TopNavbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/movies/:ID">
                <MovieDetails />
              </Route>
              <Route exact path="/movieslist">
                <Movies />
              </Route>
              <Route exact path="/tvshows">
                <TvShows />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/register">
                <Register />
              </Route>
              <Route exact path="/signin">
                <SignIn />
              </Route>{" "}
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
            <Footer />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
