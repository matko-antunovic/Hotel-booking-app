export const GET_ROOM = "GET_ROOM";

export const getRoom = id => {
  return {
    type: GET_ROOM,
    payload: id
  };
};
