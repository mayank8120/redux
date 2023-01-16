import { combineReducers } from "redux";
import BatReducer from "./reducer1";
import BallReducer from "./reducer2";


const rootReducer = combineReducers({
    bat: BatReducer,
    ball: BallReducer
})


export default rootReducer;