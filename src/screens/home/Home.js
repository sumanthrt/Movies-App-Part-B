import React, { useState } from "react";

import Header from "../../common/header/Header";
import "./Home.css";
import SingleLineImageList from "./MovieList";
import moviesData from "../../common/moviesData";
import TitlebarImageList from "./HomeImageList";
import MovieFilter, { userSelection } from "./MovieFilter";
import genres from "./genre";
import artists from "./artists";

function Home() {
  const [homeState, setHomeState] = useState({
    data: moviesData,
    genres: genres,
    artists: artists,
    userSelection: moviesData,
  });

  const [movieState, setMovieState] = useState(moviesData);

  var filterHandler = () => {
    if (
      userSelection.name === "" &&
      userSelection.releaseDateStart === "" &&
      userSelection.releaseDateEnd === "" &&
      userSelection.genres.length === 0 &&
      userSelection.artists.length === 0
    ) {
      const state = this.state;
      state.userSelection = moviesData;
      this.setState(state);
      return moviesData;
    } else {
      const filteredMovies = movieState.filter((movie) => {
        if (
          movie.title.toLowerCase() === userSelection.name.toLowerCase() ||
          movie.genres.some((genre) => userSelection.genres.includes(genre)) ||
          (parseInt(new Date(movie.release_date).getTime(), 10) <=
            parseInt(new Date(userSelection.releaseDateEnd).getTime(), 10) &&
            parseInt(new Date(movie.release_date).getTime(), 10) >=
              parseInt(
                new Date(userSelection.releaseDateStart).getTime(),
                10
              )) ||
          movie.artists.some((artist) =>
            userSelection.artists.includes(
              `${artist.first_name} ${artist.last_name}`
            )
          )
        ) {
          return movie;
        }
        return null;
      });
      const newState = filteredMovies;
      setMovieState(newState);
    }
  };

  return (
    <div>
      <Header
        btnType="loginbtn"
        variant="contained"
        buttonName="LOGIN"
        btnType2="hiddenbtn"
        buttonName2="hidden"
        btnType3="logoutbtn"
        buttonName3="LOGOUT"
      />
      <span className="heading">Upcoming movies</span>
      <SingleLineImageList moviesData={homeState.data} />
      <div className="flex-container">
        <div className="homeImages">
          <TitlebarImageList moviesData={movieState} />
        </div>
        <div className="movieFilter">
          <MovieFilter
            genres={homeState.genres}
            artists={homeState.artists}
            filterHandler={filterHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
