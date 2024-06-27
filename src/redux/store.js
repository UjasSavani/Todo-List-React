import { createStore } from "redux";
import { combineReducers } from "redux";
import { todoReducer } from "./reducers/todoReducer";
import { mockReducer } from "./reducers/mockReducer";


const baseReducer = combineReducers({todoReducer, mockReducer});

const store = createStore(baseReducer);

export default store;