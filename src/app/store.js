// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from '../features/counter/counterSlice';
import { createStore, applyMiddleware } from 'redux'
import counterReducer from '../features/counter/pureReduxCounter';
import combine from "../features/counter/combineReducer";
import thunk from 'redux-thunk';

// export default counterReducer({
//     reducer: {
//         counter: counterReducer,
//     },
// })
const store = createStore(
    combine,
    applyMiddleware(thunk)

)
export default store