import {LOG_IN,LOG_OUT} from '../actions/login'

const loginReducer = (state={state:false,user:null},action)=>{
    switch(action.type){
        case LOG_IN:
            return {
                state:true,
                user:action.user
            }
        case LOG_OUT:
            return {
                state:false,
                user:null
            }

        default:
            return state;
    }
}

export default loginReducer;