import React from 'react';

const Card = ({ imageSrc, name, price, rating }) => {
  return (
    <div className="card d-flex align-items-center justify-content-center">
      <img style={{height: "80px", width: "60px"}} src={"https://www.pngall.com/wp-content/uploads/2016/06/Samsung-Mobile-Phone-Free-Download-PNG.png"} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Price: ${price}</p>
        <p className="card-text">Rating: {rating}/5</p>
        {/* You can add additional features like buttons, etc. */}
      </div>
    </div>
  );
};

export default Card;
