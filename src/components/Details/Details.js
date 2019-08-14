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
          <h1>Details</h1>
         <p>Type : {details.type}</p>
         <p>Price : {details.price}$</p>
         <p>Size : {details.size}sq</p>
         <p>Capacity : {details.capacity}</p>
         
        </div>
        <div className="details-extra">
          <h1>Extras</h1>
          {extras}
        </div>
      </div>
    </div>
  );
};

export default Details;
