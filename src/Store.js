import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { data } from "./Reducer";

const Store=()=>{
    const config=createStore(combineReducers({state:data}),applyMiddleware(thunk))
    return config
}
export default Store