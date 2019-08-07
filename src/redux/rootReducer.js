import {combineReducers} from "redux";
import dataReducer from "./Data/dataReducer";

const rootReducer=combineReducers({
    data:dataReducer
})

export default rootReducer;