/**
 * @fileOverview This file contains the action generators for the userReducer
 */

//constants
export const INITIALIZE_USERS = 'INITIALIZE_USERS'
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION'
export const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER'

/**
 * @description Generates and action for initializing user data
 * @function
 * @param {Object} users -An object that contains all the users
 * @returns {{type: string, users: *}}
 */
export const initializeUsers = (users)=>{

    return {
        type:INITIALIZE_USERS,
        users
    }
}

/**
 * @description Generates an action for adding a new poll. Adds the new poll to the user's questions
 * @function
 * @param {Object} question -An object that contains the userId and the questionId
 * @returns {{questionId: *, type: string, userId: *}}
 */
export const addUserQuestion = (question)=>{
    return {
        type:ADD_USER_QUESTION,
        userId:question.userId,
        questionId:question.questionId
    }

}

/**
 * @description Generates an action for saving a users answer to a poll
 * @param {string} authedUser -the logged in users id
 * @param {string} qid - the answered poll's id
 * @param {string} answer - the users choice, either optionOne or optionTwo
 * @returns {{answer: *, type: string, authedUser: *, qid: *}}
 */
export const saveUserAnswer = (authedUser,qid,answer)=>{
    return{
        type:SAVE_USER_ANSWER,
        qid,
        answer,
        authedUser
    }
}