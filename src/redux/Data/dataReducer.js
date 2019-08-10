import DATA from "../../assets/data"
import {GET_ROOM} from "./dataActions";

const initialState={
    rooms:DATA,
    room:[]
}

const dataReducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_ROOM:
            return{
                ...state,
                room:state.rooms.filter(room=>room.sys.id===action.payload)
            }
        default:
            return state;
    }
}

export default dataReducer;