import React, { useState } from "react";
import { form, button } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
const Filter = (props) => {
  const handlechange = (number) => {
    props.setRate(number);
  };
  return (
    <div>
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => props.handleFilter(e.target.value)}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      <div>
        <StarRatingComponent
          name="rate1"
          starCount={5}
          onStarClick={(value) => handlechange(value)}
          emptyStarColor={"white"}
        />
      </div>
    </div>
  );
};

export default Filter;
