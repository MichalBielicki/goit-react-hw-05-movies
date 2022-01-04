import React, { useState, useEffect } from "react";
import PopularMoviesList from "../../components/popularMoviesList/PopularMoviesList";
import { fetchPopular } from "../utils/api";



const HomePage = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetchPopular(setPopular);
  }, []);

  return (
    <div>
      <h1 className="header">Popular Today</h1>
      <PopularMoviesList popular={popular} />
    </div>
  );
};

export default HomePage;