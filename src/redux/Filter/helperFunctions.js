export const filterRooms = ({
  rooms,
  type,
  capacity,
  price,
  minSize,
  maxSize,
  breakfast,
  pets
}) => {

  let tempRooms = [...rooms];
  if (type !== "all") {
    return(tempRooms = tempRooms.filter(room => room.fields.type === type));
  }
};
