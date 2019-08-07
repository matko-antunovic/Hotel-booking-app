import React from "react";
import "./Bar.scss";


const Bar=({rooms,handleChange})=> {

//  const {
//     type,
//     capacity,
//     price,
//     minPrice,
//     maxPrice,
//     minSize,
//     maxSize,
//     breakfast,
//     pets
//   } = rooms;



  const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
  };


  
  const roomsFilter=rooms.map(room=>room.fields)
  let types = getUnique(roomsFilter, "type");
  // add all
  types = ["all", ...types];
  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

    return (
      <div className="bar">
        <div className="bar-title">Search room</div>
        <div className="bar-filters">
          <form className="filter-form">
            <div className="form-group">
            <label htmlFor="typy">Room Type</label>
            <select 
            name="type"
            id="type"
            onChange={handleChange}
            value="type"
            className="form-control">
                {types}
            </select>
            </div>
          </form>

        </div>
      </div>
    );
  }



export default (Bar);
