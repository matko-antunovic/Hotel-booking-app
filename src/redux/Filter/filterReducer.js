import {
  GET_ROOMS,
  GET_MAX_PRICE,
  GET_MAX_SIZE,
  SET_PRICE,
  HANDLE_CHANGE,
  FILTER_ROOMS
} from "./filterActions";

import {filterRooms} from "./helperFunctions"

const initialState = {
  rooms: [],
  sortedRooms: [],
  loading: true,
  type: "all",
  capacity: 1,
  price: 0,
  minPrice: 0,
  maxPrice: 0,
  minSize: 0,
  maxSize: 0,
  breakfast: false,
  pets: false
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROOMS:
      return {
        ...state,
        rooms: [...action.payload]
      };
    case GET_MAX_PRICE:
      return {
        ...state,
        maxPrice: Math.max(...state.rooms.map(room => room.fields.price))
      };
    case GET_MAX_SIZE:
      return {
        ...state,
        maxSize: Math.max(...state.rooms.map(room => room.fields.size))
      };
    case SET_PRICE:
      return {
        ...state,
        price: state.maxPrice
      };
    case FILTER_ROOMS:
      return {
        ...state,
        sortedRooms:filterRooms(state)
      };
    case HANDLE_CHANGE:
      return {
        ...state,
       [action.payload.name]:action.payload.value
      };
    default:
      return state;
  }
};

export default filterReducer;
