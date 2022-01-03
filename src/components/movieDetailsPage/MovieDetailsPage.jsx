import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../movieDetails/MovieDetails";
import { fetchMovie } from "../utils/api";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetchMovie(id, setMovie);
  }, [id]);

  return (
    <div>
      <MovieDetails movie={movie} />
    </div>
  );
};

export default MovieDetailsPage;