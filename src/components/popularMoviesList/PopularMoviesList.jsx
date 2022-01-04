import React from "react";
import { Link } from "react-router-dom";

const PopularMoviesList = ({ popular }) => {
  return (
    <ul className="list">
      {popular.map((movie) => (
        <li className="listItem" key={movie.id}>
          <Link className="linked" to={`/movies/${movie.id}`}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PopularMoviesList;