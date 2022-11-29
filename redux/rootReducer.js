import { combineReducers } from "redux";
import ballReducer from "./ballReducer";
import batReducer from "./batReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    Ball : ballReducer,
    Bat : batReducer,
    User : userReducer
});
export default rootReducer;
