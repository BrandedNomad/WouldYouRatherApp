
import {INITIALIZE_USERS,ADD_USER_QUESTION} from '../actions/users'



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
        default:
            return state
    }
}

export default usersReducer