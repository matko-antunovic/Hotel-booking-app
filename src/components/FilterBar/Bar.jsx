import React from "react";
import "./Bar.scss";

const Bar = ({ rooms, handleChange,type,capacity,guests,price,minPrice,maxPrice,breakfast,pets}) => {
  
  //SET OPTIONS FUNC

  const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
  };
  //ADDING UNIQUE OPTIONS

  const roomsFilter = rooms.map(room => room.fields);
  let types = getUnique(roomsFilter, "type");

  //ADD ALL TO OPTIONS

  types = ["all", ...types];
  types = types.map((item, index) => (
    <option  key={index} value={item}>
      {item}
    </option>
  ));

  //ADDING CAPACITY
    
    let people=getUnique(roomsFilter,"capacity")
    people=people.map((item,index)=>(
      <option key={index} value={item}>
        {item}
      </option>
    ))

    //FILTER OPTIONS

  return (
    <div className="bar">
      <div className="bar-title">Search rooms</div>
      <div className="bar-filters">
        <form className="filter-form">
        {/* ////////////////////////////// */}
          <div className="form-group">
            <label className="label-form" htmlFor="type">Room Type  </label>
            <select
              name="type"
              id="type"
              onChange={handleChange}
              value={type}
              className="form-control"
            >
              {types}
            </select>
          </div>
          {/* ////////////////////////////// */}

          
        <div className="form-group">
          <label className="label-form" htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            onChange={handleChange}
            className="form-control"
            value={capacity}
          >
            {people}
          </select>
        </div>

        {/* ////////////////////////////// */}

        <div className="form-group">
          <label className="label-form" htmlFor="price">Price:  </label>
          <input type="range" id="price" name="price" min={minPrice} max={maxPrice}className="form-control" value={price} onChange={handleChange} />
          <span>{price}$ </span>
        </div>



        <div className="form-extras">
          <input
          type="checkbox"
            name="breakfast"
            id="breakfast"
            onChange={handleChange}
            className="form-control"
            checked={breakfast}
          /><label className="label-form" htmlFor="breakfast"> Breakfast</label>
          </div>
          <div className="form-extras">
          <input
          type="checkbox"
            name="pets"
            id="pets"
            onChange={handleChange}
            className="form-control"
            checked={pets}
          /><label className="label-form" htmlFor="pets"> Pets</label>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Bar;
