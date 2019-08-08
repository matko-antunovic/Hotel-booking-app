import {combineReducers} from "redux";
import dataReducer from "./Data/dataReducer";
import filterReducer from "./Filter/filterReducer"

const rootReducer=combineReducers({
    data:dataReducer,
    filter:filterReducer
})

export default rootReducer;