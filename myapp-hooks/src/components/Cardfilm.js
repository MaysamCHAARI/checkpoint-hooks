import React from "react";
import "./Cardfilm.css";
import StarRatingComponent from "react-star-rating-component";

const Cardfilm = ({ list }) => {
  return (
    <div className="container">
      {list.map((elm) => (
        <div className="card card2" style={{ width: "40rem", height: "25rem" }}>
          <img
            style={{ width: "10rem" }}
            src={elm.posterUrl}
            className="card-img-top center"
            alt="film image"
          />

          <div className="card-body">
            <h2 className="card-title">{elm.title}</h2>
            <p className="card-text">{elm.description}</p>
            <a href="#" className="btn btn-primary">
              show
            </a>
          </div>
          <div></div>
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={elm.rating}
            emptyStarColor={"white"}

            // onStarClick={this.onStarClick.bind(this)}
          />
        </div>
      ))}
    </div>
  );
};

export default Cardfilm;
