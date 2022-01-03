import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "../utils/api";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchReviews(id, setReviews);
  }, [id]);

  return (
    <div>
      {reviews.length < 1 ? (
        <p>Sorry, no reviews available</p>
      ) : (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <p>Review author: {author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;