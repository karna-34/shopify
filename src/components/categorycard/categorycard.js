
import React from "react";
import "./categorycard.css"

function CategoryCards(props) {
  return (
    <div className="card m-3 shadow">
    <img
      src={props.img}
      className="card-img-top card-image"
      style={{ height: "330px" }}
      alt={props.name}
    />
    <div className="card-body">
      <h2>{props.category}</h2>
    </div>
  </div>
  
    
  );
}

export default CategoryCards;
