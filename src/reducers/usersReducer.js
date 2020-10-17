
import {INITIALIZE_USERS} from '../actions/users'

const usersReducer = (state=[],action)=>{
    switch(action.type){
        case INITIALIZE_USERS:
            return action.users
        default:
            return state
    }
}

export default usersReducer