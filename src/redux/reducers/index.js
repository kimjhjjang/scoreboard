import {combineReducers} from "redux";
import {playerReducer} from "./player";
import {workReducer} from "./work";

// 초기 state는 {playerReducer: undefined}
export const rootReducer = combineReducers({playerReducer: playerReducer , workReducer:workReducer});