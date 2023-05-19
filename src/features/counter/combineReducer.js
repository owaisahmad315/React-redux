import counterReducer from "./pureReduxCounter";
import { combineReducers } from "redux";

const combine = combineReducers({
    counterReducer,
})

export default combine;