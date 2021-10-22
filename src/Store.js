import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { data, log } from "./Reducer";

const Store = () => {
  const config = createStore(
    combineReducers({ state: data, state1: log }),
    applyMiddleware(thunk)
  );
  return config;
};
export default Store;
