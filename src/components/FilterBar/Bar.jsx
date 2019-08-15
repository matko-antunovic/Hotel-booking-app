import React from "react";
import "./Bar.scss";
import {connect} from "react-redux"
import {handleFilterChange,filterRooms} from "../../redux/Data/dataActions"


const Bar = ({ rooms,handleFilterChange,filterRooms,data}) => {
  
  //SET OPTIONS FUNC///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
    people=people.sort((a, b)=>a-b).map((item,index)=>(
      <option key={index} value={item}>
        {item}
      </option>
    ))

    //FILTER OPTIONS///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
    const handleChange=event=>{
      const target=event.target;
      const value=target.type === "checkbox" ? target.checked : target.value;
      const name=target.name;
      
      handleFilterChange(name,value);
      filterRooms();
    
  }
  
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
              value={data.type}
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
            value={data.capacity}
          >
            {people}
          </select>
        </div>

        {/* ////////////////////////////// */}

        <div className="form-group">
          <label className="label-form" htmlFor="price">Price:  </label>
          <input type="range" id="price" name="price" min={0} max={data.maxPrice} className="form-control" value={data.price} onChange={handleChange} />
          <span>{data.price}$ </span>
        </div>



        <div className="form-extras">
          <input
          type="checkbox"
            name="breakfast"
            id="breakfast"
            onChange={handleChange}
            className="form-control"
            checked={data.breakfast}
          /><label className="label-form" htmlFor="breakfast"> Breakfast</label>
          </div>
          <div className="form-extras">
          <input
          type="checkbox"
            name="pets"
            id="pets"
            onChange={handleChange}
            className="form-control"
            checked={data.pets}
          /><label className="label-form" htmlFor="pets"> Pets</label>
          </div>

        </form>
      </div>
    </div>
  );
};

const mapStateToProps=state=>({
  data:state.data
})

const mapDispatchToProps=dispatch=>({
  handleFilterChange:(name,value)=>{dispatch(handleFilterChange(name,value))},
  filterRooms:()=>{dispatch(filterRooms())},
})

export default connect(mapStateToProps,mapDispatchToProps)(Bar);

