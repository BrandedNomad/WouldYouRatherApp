import {INITIALIZE_QUESTIONS,ADD_QUESTION} from "../actions/questions";


const usersReducer = (state=[],action)=>{
    switch(action.type){
        case INITIALIZE_QUESTIONS:
            return action.questions
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            }
        default:
            return state
    }
}

export default usersReducer