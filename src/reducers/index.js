import loginReducer from "./loginReducer";
import usersReducer from "./usersReducer";
import questionsReducer from "./questionsReducer"
import {combineReducers} from "redux";

/**
 * @description Combines all reducers into one that can be used to initialize the store
 */
export default combineReducers({
    login:loginReducer,
    users:usersReducer,
    questions: questionsReducer
});