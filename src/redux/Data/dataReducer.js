import DATA from "../../assets/data"

const initialState={
    rooms:DATA
}

const dataReducer=(state=initialState,action)=>{
    switch(action.type){
        
        default:
            return state;
    }
}

export default dataReducer;