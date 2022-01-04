import React from "react";
import { Link } from "react-router-dom";

const PopularMoviesList = ({ popular }) => {
  return (
    <ul>
      {popular.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PopularMoviesList;