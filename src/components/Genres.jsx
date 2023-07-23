import React, { useState } from "react";

export default function Genres({
  movieList,
  setMovieList,
  genres,
  copyMovieList,
}) {
  const [active, setActive] = useState(0);
  function sortedByGenres(id, i) {
    const sortedMovies = copyMovieList.filter((el) => {
      return el.genre_ids.includes(id);
    });
    setMovieList(sortedMovies);
    setActive(i);
  }
  

  return (
    <div className="genres">
      {genres.map((el, i) => (
        <span
          onClick={() => sortedByGenres(el.id, i)}
          className={i === active ? "genre active" : "genre"}
          key={el.id}
        >
          {el.name}
        </span>
      ))}
    </div>
  );
}
