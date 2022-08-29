import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

function Rate() {
  const [ratingValue, setRatingValue] = useState(0);

  const handleRating = (e) => {
    setRatingValue({ ...ratingValue, [e.target.name]: e.target.value });
  };
  console.log(ratingValue);
  return <Rating />;
}
export default Rate;
