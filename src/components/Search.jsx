import { useState } from "react";

export default function Search({ setData, options }) {
  const [value, setValue] = useState("interstellar");

  function handleSearch(e) {
    e.preventDefault();
    fetch(` https://api.themoviedb.org/3/search/movie?query=${value}`, options)
      .then((res) => res.json())
      .then((data) => setData(data.results))
      .catch((rej) => {
        console.log(rej);
      });
  }

  return (
    <form className="search-form">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="search-input"
        placeholder="Search ombd"
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </form>
  );
}
