import { useEffect, useState } from "react";
import Movie from "./Movie";
import Filters from "./Filters";
import Genres from "./Genres";
import MoviePage from "./MoviePage";

export default function MovieList({ data, options }) {
  const [review, setReview] = useState([]);
  const [movieList, setMovieList] = useState(data);
  const [genres, setgenres] = useState([]);
  const [copyMovieList, setCopyMovieList] = useState([1]);
  const [movieId, setMovieId] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(false);

  useEffect(() => {
    if (data.length === 0) {
      fetch("https://api.themoviedb.org/3/movie/popular", options)
        .then((response) => response.json())
        .then((response) => {
          setMovieList(response.results);

          setCopyMovieList(response.results);
        })
        .catch((err) => console.error(err));
    } else {
      setMovieList(data);
      setCopyMovieList(data);
    }
  }, [data, options]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/genre/movie/list", options)
      .then((response) => response.json())
      .then((response) => setgenres(response.genres))
      .catch((err) => console.error(err));

    fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews`, options)
      .then((response) => response.json())
      .then((response) => setReview(response.results))
      .catch((err) => console.error(err));
  }, [options, movieId]);

  return (
    <div className="movie-list">
      {!selectedMovie ? (
        <Filters setMovieList={setMovieList} movieList={movieList} />
      ) : (
        ""
      )}
      {!selectedMovie ? (
        <Genres
          movieList={movieList}
          setMovieList={setMovieList}
          genres={genres}
          copyMovieList={copyMovieList}
        />
      ) : (
        ""
      )}

      {selectedMovie ? (
        <MoviePage
          id={movieId}
          movieList={movieList}
          setSelectedMovie={setSelectedMovie}
          review={review}
        />
      ) : movieList.length === 0 ? (
        <p>Ничего не найдено</p>
      ) : (
        movieList?.map((el) => {
          return (
            <Movie
              el={el}
              key={el.id}
              genre={el.genre_ids}
              genres={genres}
              setMovieId={setMovieId}
              setSelectedMovie={setSelectedMovie}
              review={review}
            />
          );
        })
      )}
    </div>
  );
}
