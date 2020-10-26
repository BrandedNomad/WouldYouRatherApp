/**
 * @fileOverview contains functions that handles API calls and dispatches actions that changes the app state
 */

import {_getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer} from "../utils/_DATA";
import {initializeUsers,addUserQuestion,saveUserAnswer} from "./users";
import {initializeQuestions, addQuestion, saveAnswerQuestion} from "./questions";

/**
 * @description Retrieves (from API) and sets the initial data for users and questions
 * @function
 * @returns {function(*): Promise<void>}
 */
export const handleInitialData = ()=>{
    return (dispatch)=>{
        return getInitialData()
            .then(({users,questions})=>{
                dispatch(initializeUsers(users))
                dispatch(initializeQuestions(questions))
            })
    }
}

/**
 * @description a helper function for handleInitialData that retrieves data from API
 * @function
 * @returns {Promise<{questions: *, users: *}>}
 */
function getInitialData(){
    return Promise.all([
        _getUsers(),
        _getQuestions()
    ]).then(([users,questions])=>({
        users,questions
    }))
}


/**
 * @description Adds new poll question to store and sets the references on the user
 * @function
 * @param {string} optionOneText -the text for option one
 * @param {string} optionTwoText -the text for option two
 * @param {string} author - the id of the logged in user
 * @returns {function(*): Promise<void>}
 */
export const handleAddQuestion=(optionOneText, optionTwoText, author)=>{
    return (dispatch)=>{

        return _saveQuestion({optionOneText,optionTwoText,author})
            .then((formattedQuestion)=>{
                dispatch(addQuestion(formattedQuestion))
                dispatch(addUserQuestion({userId:author,questionId:formattedQuestion.id}))
            }).catch((error)=>{
                console.log("there has been an error",error)
            })

    }

}

/**
 * @description Updates the API and stores with a users response to poll questions
 * @function
 * @param {string} authedUser - the id of the current logged in user
 * @param {string } qid - the id of the question being answered
 * @param {string} answer -the users choice (either optionOne or optionTwo)
 * @returns {function(*): Promise<void>}
 */
export const handleAnswerQuestion=(authedUser, qid, answer)=>{

    return (dispatch)=>{

        return _saveQuestionAnswer({authedUser, qid, answer})
            .then((result)=>{
                dispatch(saveAnswerQuestion(authedUser,qid,answer))
                dispatch(saveUserAnswer(authedUser,qid,answer))
            })
            .catch((error)=>{
                console.log(error)
            })
    }

}