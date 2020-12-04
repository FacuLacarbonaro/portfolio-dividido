import React from "react";

import "./Card.scss";

const Card = ({image, alt, title, description}) => {
  return (
    <div className="card">
      <div className="card__front">
          <img src={image} alt={alt}/>
      </div>

      <div className="card__back">
          <h3>
              {title}
          </h3>
          <p>
              {description}
          </p>
      </div>
    </div>
  );
};

export default Card;
