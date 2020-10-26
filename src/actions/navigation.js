
//constants
export const HOME = 'HOME';
export const ADD = 'ADD';
export const LEADER = 'LEADER';
export const NONE = 'NONE'

/**
 * @description Generates an action for the navReducer. Sets the Home tab as active
 * @returns {{type: string}}
 */
export const homeTab = ()=>{
    return {
        type:HOME
    }
}

/**
 * @description Generates an action for the navReducer. Sets the new question tab as active
 * @returns {{type: string}}
 */
export const newQuestionTab = ()=>{
    return {
        type:ADD
    }
}

/**
 * @description Generates an action for the navReducer. Sets the leader board tab as active
 * @returns {{type: string}}
 */
export const leaderTab = ()=>{
    return {
        type:LEADER
    }
}

/**
 * @description Generates an action for the navReducer. Sets all tabs as inactive
 * @returns {{type: string}}
 */
export const noTab = ()=>{
    return {
        type:NONE
    }
}