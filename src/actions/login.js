/**
 *@fileOverview This file contains action generators for logging in and out
 */

//constants
export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'

/**
 * @description Generates an action for logging in
 * @param {object} user - the user to be logged in
 * @returns {{type: string, user: *}}
 */
export const login = (user)=>{
    return {
        type:LOG_IN,
        user
    }

}

/**
 * @description Generates an action for Logging out the currently logged in user
 * @returns {{type: string}}
 */
export const logout = ()=>{
    return {
        type:LOG_OUT
    }
}