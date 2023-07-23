import { useEffect, useState } from "react";

const IMG_URL = "https://image.tmdb.org/t/p/w200/";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export default function MoviePage({
  id,
  movieList,
  setSelectedMovie,
  options,
  review,
}) {
  const filteredMovie = movieList.find((el) => el.id === id);

  return (
    <>
      <button onClick={() => setSelectedMovie(false)} className="back">
        Back
      </button>
      {filteredMovie && (
        <div className="movie-page">
          <h2 className="movie-page-title">{filteredMovie.title}</h2>
          <img
            className="movie-poster"
            src={IMG_URL + filteredMovie.poster_path}
            alt={filteredMovie.Title}
          />
          <div className="overview">
            <p>{filteredMovie.overview}</p> <br />
            <span>Average rating: {filteredMovie.vote_average}</span>
            <br />
            <progress
              className="progress"
              value={filteredMovie.vote_average}
              max="10"
            ></progress>
          </div>

          <div className="rewievs-block">
            {review?.map((el) => {
              return (
                <div className="rewiev" key={el.id}>
                  <div className="rewiev-user-info">
                    <img
                      className="rewiev-avatar"
                      src="https://image.tmdb.org/t/p/w200/xy44UvpbTgzs9kWmp4C3fEaCl5h.png"
                      alt={el.author}
                    />
                    <span className="rewiev-author">
                      {el.author} <br />
                      <span className="rewiev-date">
                        {" "}
                        {` ${new Date(el.created_at).getFullYear()} ${
                          months[new Date(el.created_at).getMonth() + 1]
                        }`}
                      </span>
                    </span>{" "}
                    <br />
                  </div>

                  <p className="rewiev-content">{el.content}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
