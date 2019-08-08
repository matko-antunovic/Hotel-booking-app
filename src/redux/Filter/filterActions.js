export const GET_ROOMS = "GET_ROOMS";
export const GET_MAX_PRICE = "GET_MAX_PRICE";
export const GET_MAX_SIZE = "GET_MAX_SIZE";
export const SET_PRICE = "SET_PRICE";
export const HANDLE_CHANGE = "HANDLE_CHANGE";
export const FILTER_ROOMS = "FILTER_ROOMS";

export const getRooms = rooms => {
  return {
    type: GET_ROOMS,
    payload: rooms
  };
};

export const getMaxPrice = () => {
  return {
    type: GET_MAX_PRICE
  };
};

export const getMaxSize = () => {
  return {
    type: GET_MAX_SIZE
  };
};

export const setPrice = () => {
  return {
    type: SET_PRICE
  };
};


export const filterRooms=()=>{
    return {
   type:FILTER_ROOMS
}}


export const handleFilterChange = (name, value) =>{
    return  {
        type: HANDLE_CHANGE,
        payload: {
          name: name,
          value: value
        }
      }};

