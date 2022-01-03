import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCast } from "../utils/api";
import image from "./../../poster-placeholder.png";

const buttonStyles = {
  width: "200px",
  height: "300px",
  listStyle: "none",
  display: "inline-flex",
  flexDirection: "column",
  margin: "30px 0",
};

const Cast = () => {
  const [cast, setCast] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchCast(id, setCast);
  }, [id]);

  return (
    <div>
      <ul style={{ ...buttonStyles }}>
        {cast.length < 1 ? (
          <p>Sorry, no cast available</p>
        ) : (
          cast.map(({ character, id, name, profile_path }) => (
            <li key={id}>
              {profile_path === null ? (
                <img
                  style={{ ...buttonStyles }}
                  src={image}
                  alt={`No ${name} here, just placeholder`}
                />
              ) : (
                <img
                  style={{ ...buttonStyles }}
                  src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                  alt={`${name}`}
                />
              )}
              <p>Name: {name}</p>
              <p>Character: {character}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Cast;