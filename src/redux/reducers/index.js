import {combineReducers} from "redux";
import {playerReducer} from "./player";

// 초기 state는 {playerReducer : xxx}
export const rootReducer = combineReducers({playerReducer: playerReducer});