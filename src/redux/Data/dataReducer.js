import {
  GET_ROOM,
  GET_DATA,
  HANDLE_CHANGE,
  FILTER_ROOMS
  } from "./dataActions";
import {filterRooms,getPrice} from "./helperFunctions"

const initialState={
  data:[],
  sortedRooms: [],
  loading: true,
  type: "all",
  capacity: 1,
  price: 0,
  minPrice: 0,
  maxPrice: 0,
  minSize: 0,
  breakfast: false,
  pets: false,
  max:0
}

const dataReducer=(state=initialState,action)=>{
    switch(action.type){
    case GET_ROOM:
    return{
    ...state,
     data:state.data.filter(room=>room.sys.id===action.payload)
            }
    case GET_DATA:
     return{
     ...state,
    data:action.payload,
    sortedRooms:action.payload,
    maxPrice:getPrice(action.payload),
    price:getPrice(action.payload)
    }
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
}

export default dataReducer;