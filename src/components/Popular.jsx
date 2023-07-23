import React from "react";
const IMG_URL = "https://image.tmdb.org/t/p/w500/";
export default function Popular({ el }) {
  return (
    <div key={el.imdbID} className="movie">
      <div className="movie-poster-block">
        <img
          className="movie-poster"
          src={IMG_URL + el.poster_path}
          alt={el.Title}
        />
      </div>
      <div className="movie-info">
        <h2 className="movie-title">{el.title}</h2>
        <p className="movie-year">{el.release_date}</p>
        <p className="overview">{el.overview}</p>
        <p className="rating">Average rating: {el.vote_average}</p>
      </div>
    </div>
  );
}
