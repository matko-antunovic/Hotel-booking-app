import React from "react";
import "./Item.scss";
import {withRouter} from "react-router-dom";


const Item = ({ item,history,match ,id}) => {
  const { name, price } = item;

  return (
    <div
      style={{
        backgroundImage: `url(${item.images[0].fields.file.url})`
      }}
      className="item-container"
      onClick={()=>history.push(`${match.url}room/${id}` )}
    >
      <div className="item-price">{price}$</div>
      <div className="item-name">{name}</div>
      
    </div>
  );
};

export default withRouter(Item);
