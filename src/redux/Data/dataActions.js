import client from "../../contentful/Contentful";
export const GET_DATA = "GET_DATA";
export const GET_ROOM = "GET_ROOM";
export const GET_ROOMS = "GET_ROOMS";
export const HANDLE_CHANGE = "HANDLE_CHANGE";
export const FILTER_ROOMS = "FILTER_ROOMS";

export const getData=()=>async(dispatch)=>{
  const response= await client
  .getEntries({
      content_type:"blueLagoon",
      order:"sys.createdAt"
  }
      )
  .then(response => (response.items))
  .catch(err => console.log(err));

  dispatch({
        type:GET_DATA,
        payload:response
      })
}

export const getRooms = rooms => { 
  return {
    type: GET_ROOMS,
    payload: rooms
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


export const getRoom = id => {
  return {
    type: GET_ROOM,
    payload: id
  };
};



