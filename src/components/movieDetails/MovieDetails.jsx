import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
//import "./MovieDetails.css";

const MovieDetails = ({ movie }) => {
  const { id, title, overview, vote_average, genres, poster_path } = movie;
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <div className="movieWrapper">
      <button className="button" onClick={goBack}>
       Go back
      </button>
      <div>
        {poster_path !== undefined ? (
          <img
            className="poster"
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={`${title} movie poster`}
          />
        ) : (
          <p>Sorry, no poster available</p>
        )}
        <div>
          <h1 className="title">{title}</h1>
          <p className="votes">User Score: {vote_average * 10}%</p>
          <h2 className="subtitle">Overwiew</h2>
          <p className="overview">{overview}</p>
          <h2 className="subtitle">Genres</h2>
          <p className="genres">{genres?.map(({ name }) => name + ", ")}</p>
        </div>
      </div>
      <div>
        <h3 className="subtitle">Additional information</h3>
        <ul className="linkList">
          <li className="listItem">
            <Link className="link" to={`/movies/${id}/cast`}>
              Cast
            </Link>
          </li>
          <li className="listItem">
            <Link className="link" to={`/movies/${id}/reviews`}>
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;