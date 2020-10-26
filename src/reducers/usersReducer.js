
import {INITIALIZE_USERS,ADD_USER_QUESTION,SAVE_USER_ANSWER} from '../actions/users'


/**
 * @description A Reducer for the users state. Updates the users state in accordance with the actions generated
 * @function
 * @param {object} state -the current state
 * @param {object} action -the action returned from the generator
 * @returns {object} the new state
 * */
const usersReducer = (state=[],action)=>{
    switch(action.type){
        case INITIALIZE_USERS:
            return action.users
        case ADD_USER_QUESTION:
            return {
                ...state,
                [action.userId]:{
                    ...state[action.userId],
                    questions:state[action.userId].questions.concat([action.questionId])
                }

            }
        case SAVE_USER_ANSWER:
            return {
                ...state,
                [action.authedUser]:{
                    ...state[action.authedUser],
                    answers:{
                        ...state[action.authedUser].answers,
                        [action.qid]:[action.answer][0]
                    }
                }
            }
        default:
            return state
    }
}

export default usersReducer