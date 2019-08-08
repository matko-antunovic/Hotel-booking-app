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

 //ROOM TYPE FILTER
  if (type !== "all") {
    tempRooms = tempRooms.filter(room => room.fields.type === type);
  }
  //CAPACITY FILTER
  if (capacity !== 1) {
    tempRooms = tempRooms.filter(room => room.fields.capacity >= capacity);
  }
  //PRICE FILTER
  tempRooms = tempRooms.filter(room => room.fields.price <= price);
  //DORUCAK
  if(breakfast){
    tempRooms = tempRooms.filter(room => room.fields.breakfast === breakfast);
  }
  //DOGE
  //DORUCAK
  if(pets){
    tempRooms = tempRooms.filter(room => room.fields.pets === pets);
  }

  return tempRooms;
  
};
