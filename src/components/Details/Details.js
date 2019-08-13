import React from "react";
import "./Details.scss";

const Details = ({ details }) => {
  console.log(details);
  const extras = details.extras.map((ext, i) => (
    <ul key={i} className="ul">
      {ext}
    </ul>
  ));
  return (
    <div className="details-container">
      <div className="details-description">
        <h1>Description</h1>
        {details.description}
      </div>
      <div className="details-extras">
        <div className="details-price">
          <h2>Details</h2>
         <p>Price:{details.price}</p>
        </div>
        <div>
          <h2>Extras</h2>
          {extras}
        </div>
      </div>
    </div>
  );
};

export default Details;
