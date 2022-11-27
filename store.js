import {createStore} from "redux";
import ballReducer from "./redux/ballReducer";
import batReducer from "./redux/batReducer";
const store = createStore(batReducer);
export default store;