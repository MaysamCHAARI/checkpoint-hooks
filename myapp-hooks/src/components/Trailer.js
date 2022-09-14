import React from "react";
import { Link, useParams } from "react-router-dom";

const Trailer = ({ list }) => {
  const params = useParams();

  const movie = list.find((el) => el.id === +params.movieid);

  return <div>{<Link to={`/trailer/${movie.id}`}>{movie.trailer}</Link>} </div>;
};

export default Trailer;
