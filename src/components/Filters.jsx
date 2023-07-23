import { useState } from "react";

export default function Filters({ movieList, setMovieList }) {
  const [sorted, setSorted] = useState(false);
  function handleSortByRating() {
    const sortedMovies = [...movieList].sort((a, b) => {
      if (sorted) {
        return a.vote_average - b.vote_average;
      } else return b.vote_average - a.vote_average;
    });
    setMovieList(sortedMovies);
    setSorted(!sorted);
  }

  function handleSortByName() {
    const sortedMovies = [...movieList].sort((a, b) => {
      if (sorted) {
        return a.title.localeCompare(b.title);
      } else return b.title.localeCompare(a.title);
    });
    setMovieList(sortedMovies);
    setSorted(!sorted);
  }

  function handleSortByReleaseDate() {
    const sortedMovies = [...movieList].sort((a, b) => {
      const dateA = new Date(a.release_date);
      const dateB = new Date(b.release_date);
      if (sorted) {
        return dateB - dateA;
      } else return dateA - dateB;
    });
    setMovieList(sortedMovies);
    setSorted(!sorted);
  }

  return (
    <div className="filters">
      <span>Sort by:</span>
      <span className="sort-button" onClick={handleSortByRating}>
        By rating
      </span>
      <span className="sort-button" onClick={handleSortByName}>
        By Name
      </span>
      <span
        role="button"
        className="sort-button"
        onClick={handleSortByReleaseDate}
      >
        By date{" "}
      </span>
    </div>
  );
}
