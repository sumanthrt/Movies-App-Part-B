import React from "react";
import "./Details.css";
// import "../../common/header/Header";
import {
  Typography,
  GridList,
  GridListTile,
  GridListTileBar,
} from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import Trailer from "./Trailer";
import ReactStars from "react-rating-stars-component";

const ratingChanged = (newRating) => {
  console.log(newRating);
};

function Details() {
  const location = useLocation();
  const data = location.state.movie;
  return (
    <div>
      <div className="backBtn">
        <Link to="/">
          <Typography>{"<"} Back To Home</Typography>
        </Link>
      </div>
      <div className="flex-container">
        <div className="detailImage">
          <img className="poster" alt="poster" src={data.poster_url}></img>
        </div>
        <div className="trailer">
          <Typography component="div" variant="h4">
            <strong>{data.title}</strong>
          </Typography>
          <Typography>
            <strong>Genres: </strong>
            {data.genres.toString()}
          </Typography>
          <Typography>
            <strong>Duration: </strong>
            {data.duration}
          </Typography>
          <Typography>
            <strong>Release Date: </strong>
            {new Date(data.release_date).toDateString()}
          </Typography>
          <Typography>
            <strong>Rating: </strong>
            {data.critics_rating}
          </Typography>
          <div className="topMargin">
            <Typography>
              <strong>Plot: </strong>
              <a href={data.wiki_url}>(Wiki Link)</a>
              {" " + data.storyline}
            </Typography>
          </div>
          <div className="topMargin">
            <Typography>
              <strong>Trailer: </strong>
              <Trailer id={data.trailer_url.slice(32)}></Trailer>
            </Typography>
          </div>
        </div>
        <div className="rating">
          <Typography>
            <strong>Rate this movie: </strong>
            <br />
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />
          </Typography>
          <Typography className="topMargin">
            <strong>Artists: </strong>
            <GridList cols={2}>
              {data.artists.map((artist) => (
                <GridListTile key={artist.id}>
                  <img src={artist.profile_url} alt="artist images"></img>
                  <GridListTileBar
                    title={artist.first_name + " " + artist.last_name}
                  ></GridListTileBar>
                </GridListTile>
              ))}
            </GridList>
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Details;
