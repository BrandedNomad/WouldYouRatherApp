import {LOG_IN,LOG_OUT} from '../actions/login'

/**
 * @description A reducer for the login function. Updates the state accordingly
 * @function
 * @param {object} state - the current state of the store
 * @param {object} action - the action returned by the generator
 * @returns {{state: boolean, user: string | null | Object | number | PublicKeyCredentialUserEntity}|{state: boolean, user: null}}
 */
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