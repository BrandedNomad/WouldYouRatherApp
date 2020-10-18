import {INITIALIZE_QUESTIONS} from "../actions/questions";


const usersReducer = (state=[],action)=>{
    switch(action.type){
        case INITIALIZE_QUESTIONS:
            return action.questions
        default:
            return state
    }
}

export default usersReducer