import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Description = ({ list }) => {
  const navigate = useNavigate();
  const params = useParams();
  const movie = list.find((el) => el.id === +params.movieid);
  return (
    <div>
      <button onClick={() => navigate("/")}>go to Home</button>
      <h1>{movie.title}</h1>
      <img src={movie.posterUrl} />
      <h3>{movie.description}</h3>
      <h4>{movie.trailer}</h4>
    </div>
  );
};

export default Description;
