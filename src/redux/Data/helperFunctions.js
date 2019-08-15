export const filterRooms = (props) => {

  const{
  data,
  type,
  capacity,
  price,
  breakfast,
  pets
}=props;
  let tempRooms = [...data];
 //ROOM TYPE FILTER
  if (type !== "all") {
     tempRooms = tempRooms.filter(room => room.fields.type === type);
  }
  //CAPACITY FILTER
  if (capacity !== 1) {
     tempRooms = tempRooms.filter(room => room.fields.capacity >= capacity);

  }
  //PRICE FILTER
  if(price){
    tempRooms = tempRooms.filter(room => room.fields.price <= price);
  }
  
  //DORUCAK
  if(breakfast){
    tempRooms = tempRooms.filter(room => room.fields.breakfast === breakfast);

  }
  //DOGE

  if(pets){
   tempRooms = tempRooms.filter(room => room.fields.pets === pets);
  }
  return tempRooms;
  
};

export const getPrice=(price)=>price.map(room => room.fields.price).sort((a,b)=>b-a)[0];