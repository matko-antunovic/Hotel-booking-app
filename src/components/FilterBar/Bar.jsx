import React from "react";
import "./Bar.scss";

const Bar = ({ rooms, handleChange }) => {
  
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
              className="form-control"
            >
              {types}
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Bar;

// import React from "react";
// import "./Bar.scss";

// const Bar = ({ rooms, handleChange }) => {
//   const getUnique = (items, value) => {
//     return [...new Set(items.map(item => item[value]))];
//   };

//   const roomsFilter = rooms.map(room => room.fields);
//   let types = getUnique(roomsFilter, "type");
//   // add all
//   types = ["all", ...types];
//   types = types.map((item, index) => (
//     <option key={index} value={item}>
//       {item}
//     </option>
//   ));

//   return (
//     <div className="bar">
//       <div className="bar-title">Search room</div>
//       <div className="bar-filters">
//         <form className="filter-form">
//           <div className="form-group">
//             <label htmlFor="typy">Room Type</label>
//             <select
//               name="type"
//               id="type"
//               onChange={handleChange}
//               value="type"
//               className="form-control"
//             >
//               {types}
//             </select>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Bar;
