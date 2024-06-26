import { createStore } from "redux";
import { combineReducers } from "redux";
import { todoReducer } from "./reducers/todoReducer";


const baseReducer = combineReducers({todoReducer, });

const store = createStore(baseReducer);

export default store;