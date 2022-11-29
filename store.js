import {createStore, applyMiddleware} from "redux";
import rootReducer from "./redux/rootReducer";
import thunk from "redux-thunk";
//import ballReducer from "./redux/ballReducer";
//import batReducer from "./redux/batReducer";
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;