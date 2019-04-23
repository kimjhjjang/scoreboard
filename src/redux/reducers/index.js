import {combineReducers} from "redux";
import {playerReducer} from "./player";
import {workReducer} from "./work";
import {blogReducer} from "./blog";

// 초기 state는 {playerReducer: undefined}
export const rootReducer = combineReducers({playerReducer: playerReducer , workReducer:workReducer, blogReducer:blogReducer});