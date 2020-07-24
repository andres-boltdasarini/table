import {applyMiddleware, combineReducers, createStore} from "redux";
import tableReducer from "./tableReducer";
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
    tableReducer: tableReducer
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));


export default store;