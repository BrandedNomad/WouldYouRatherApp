import thunk from 'redux-thunk'
import {applyMiddleware} from "redux";
import logger from "./logger";

/**
 * @description Combines middleware functions and exports them
 */
export default applyMiddleware(
    thunk, //for handling functions returned from actions
    logger //for logging state changes in console
)