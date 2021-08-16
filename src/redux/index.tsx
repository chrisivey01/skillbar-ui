import {combineReducers} from "redux";
import {skillbarReducer} from "./skillbar.reducers";

export default combineReducers({
    skillbar: skillbarReducer
});