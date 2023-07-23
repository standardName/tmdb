import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Search from "./components/Search";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWYzY2E1MjhmZWM5OGZkODJiN2QwYzFkMGI2ZWEzNSIsInN1YiI6IjY0YjRjNWNlZTBjYTdmMDEwNjk4MmI2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CULMbp-ddBSKfLSn_HFTg8Vo30NaWByDjYbNUoJRz4U",
  },
};
function App() {
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <Header>
        <Search setData={setData} options={options} />
   
      </Header>
      <MovieList data={data} options={options} />
    </div>
  );
}

export default App;


