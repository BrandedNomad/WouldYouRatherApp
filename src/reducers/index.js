import loginReducer from "./loginReducer";
import usersReducer from "./usersReducer";
import {combineReducers} from "redux";

export default combineReducers({
    login:loginReducer,
    users:usersReducer
});