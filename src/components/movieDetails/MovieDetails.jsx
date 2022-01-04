import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import s from "./MovieDetails.module.css";

const MovieDetails = ({ movie }) => {
  const { id, title, overview, vote_average, genres, poster_path } = movie;
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <div className={s.movieWrapper}>
      <button className={s.button} onClick={goBack}>
       Go back
      </button>
      <div>
        {poster_path !== undefined ? (
          <img
            className={s.poster}
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={`${title} movie poster`}
          />
        ) : (
          <p>Sorry, no poster available</p>
        )}
        <div>
          <h1 className={s.title}>{title}</h1>
          <p className={s.votes}>User Score: {vote_average * 10}%</p>
          <h2 className={s.subtitle}>Overwiew</h2>
          <p className={s.overview}>{overview}</p>
          <h2 className={s.subtitle}>Genres</h2>
          <p className={s.genres}>{genres?.map(({ name }) => name + ", ")}</p>
        </div>
      </div>
      <div>
        <h3 className={s.subtitle}>Additional information</h3>
        <ul className={s.linkList}>
          <li className={s.listItem}>
            <Link className={s.link} to={`/movies/${id}/cast`}>
              Cast
            </Link>
          </li>
          <li className={s.listItem}>
            <Link className={s.link} to={`/movies/${id}/reviews`}>
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