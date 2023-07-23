const IMG_URL = "https://image.tmdb.org/t/p/w500/";
export default function Movie({
  el,
  genre,
  genres,
  setMovieId,
  setSelectedMovie,
  selectedMovie,
  review,
}) {
  function handleMoviePage(val) {
    setSelectedMovie(true);
    setMovieId(val);
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Добавляем плавную анимацию прокрутки
    });
  }
  return (
    <div key={el.imdbID} className="movie">
      <div className="movie-poster-block">
        <img
          className="movie-poster"
          src={IMG_URL + el.backdrop_path}
          alt={el.Title}
        />
      </div>
      <div className="movie-info">
        <h2 className="movie-title" onClick={() => handleMoviePage(el.id)}>
          {el.title}
        </h2>
        <p className="movie-year">{el.release_date}</p>
        {genre.map((element) => {
          return genres.map((item) => {
            if (element === item.id) {
              return (
                <span className="movie-genres" key={item.id}>
                  {item.name}
                </span>
              );
            }
            return null;
          });
        })}
        <p className="overview">{el.overview}</p>
        <div className="rating">
          {" "}
          Average rating: <span>{el.vote_average}</span>
          <br />
          <progress
            className="progress"
            value={el.vote_average}
            max="10"
          ></progress>
          <p>Rewiews: {review?.length}</p>
        </div>
      </div>
    </div>
  );
}
