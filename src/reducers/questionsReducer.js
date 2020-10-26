import {INITIALIZE_QUESTIONS,ADD_QUESTION, SAVE_ANSWER} from "../actions/questions";


/**
 * @description: A reducer for the questions state. Updates questions state in accordance with actions generated
 * @function
 * @param {object} state -the current state
 * @param {object} action -the action returned by the action generator
 * @returns {object} the new state
 */
const usersReducer = (state=[],action)=>{
    switch(action.type){
        case INITIALIZE_QUESTIONS:
            return action.questions
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            }
        case SAVE_ANSWER:
            return {
                ...state,
                [action.answer.qid]:{
                    ...state[action.answer.qid],
                    [action.answer.answer]: {
                        text:state[action.answer.qid][action.answer.answer].text,
                        votes:state[action.answer.qid][action.answer.answer].votes.concat([action.answer.authedUser])
                    }
                }
            }
        default:
            return state
    }
}

export default usersReducer