/**
 * @fileOverview This file contains action generators for the questionsReducer
 */

//Constants
export const INITIALIZE_QUESTIONS = 'INITIALIZE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_ANSWER = 'SAVE_ANSWER'

/**
 * @description Generates an action for the initial state
 * @function
 * @param {object} questions -an object containing the questions to be loaded into Redux state
 * @returns {{questions: *, type: string}}
 */
export const initializeQuestions = (questions)=>{
    return {
        type:INITIALIZE_QUESTIONS,
        questions
    }
}


/**
 * @description Generates and action for adding a new Question
 * @function
 * @param {object} question -Question to be added
 * @returns {{question: *, type: string}}
 */
export const addQuestion = (question)=>{
    return {
        type:ADD_QUESTION,
        question
    }
}

/**
 * @description Generates an action for saving a users response to a question
 * @function
 * @param {string} authedUser - the id of the logged in user
 * @param {string} qid - the ide of the question being answered
 * @param {string} answer - the users chosen response (either optionOne or optionTwo
 * @returns {{answer: {answer: *, authedUser: *, qid: *}, type: string}}
 */
export const saveAnswerQuestion = (authedUser,qid,answer)=>{
    return {
        type:SAVE_ANSWER,
        answer:{
            authedUser,
            qid,
            answer
        }
    }
}

