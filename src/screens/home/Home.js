import React, { Component } from "react";

import Header from "../../common/header/Header";
import "./Home.css";
import SingleLineImageList from "./MovieList";
import moviesData from "../../common/moviesData";
import TitlebarImageList from "./HomeImageList";
import MovieFilter, { userSelection } from "./MovieFilter";
import genres from "./genre";
import artists from "./artists";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: moviesData,
      genres: genres,
      artists: artists,
      userSelection: moviesData,
    };
  }

  filterHandler = () => {
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
      const filteredMovies = this.state.data.filter((movie) => {
        if (
          movie.title.toLowerCase() === userSelection.name.toLowerCase() ||
          movie.genres.some((genre) => userSelection.genres.includes(genre)) ||
          (parseInt(new Date(movie.release_date).getTime(),10) <=
            parseInt(new Date(userSelection.releaseDateEnd).getTime(),10) &&
          parseInt(new Date(movie.release_date).getTime(),10) >=
            parseInt(new Date(userSelection.releaseDateStart).getTime(),10)) ||
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
      const state = this.state;
      state.userSelection = filteredMovies;
      this.setState(state);
    }
  };

  render() {
    return (
      <div>
        <Header btnType="login" variant="contained" buttonName="LOGIN" />
        <span className="heading">Upcoming movies</span>
        <SingleLineImageList moviesData={this.state.data} />
        <div className="flex-container">
          <div className="homeImages">
            <TitlebarImageList moviesData={this.state.userSelection} />
          </div>
          <div className="movieFilter">
            <MovieFilter
              genres={this.state.genres}
              artists={this.state.artists}
              filterHandler={this.filterHandler}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
