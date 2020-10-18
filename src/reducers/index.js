import loginReducer from "./loginReducer";
import usersReducer from "./usersReducer";
import questionsReducer from "./questionsReducer"
import {combineReducers} from "redux";

export default combineReducers({
    login:loginReducer,
    users:usersReducer,
    questions: questionsReducer
});