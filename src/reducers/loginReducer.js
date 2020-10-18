import {LOG_IN} from '../actions/login'

const loginReducer = (state={state:false,user:null},action)=>{
    switch(action.type){
        case LOG_IN:
            return {
                state:true,
                user:action.user
            }
        default:
            return state;
    }
}

export default loginReducer;