import React from "react";
import "./Thumbnail.scss";

const Thumbnail = ({ images, index, handleClick }) => {
  return (
    <div className="thumbnail-container">
      {images.map((img, i) => (
        <div
          onClick={() => handleClick(i)}
          className={`${index === i ? "active" : null}`}
          key={i}
        >
          <img src={img} alt="alt" />
        </div>
      ))}
    </div>
  );
};

export default Thumbnail;
