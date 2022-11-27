import { combineReducers } from "redux";
import ballReducer from "./ballReducer";
import batReducer from "./batReducer";


const rootReducer = combineReducers({
    Ball : ballReducer,
    Bat : batReducer
});
export default rootReducer;
