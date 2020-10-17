

const loginReducer = (state,action)=>{
    switch(action.type){
        case 'LOG_IN':
            return {
                state:true,
                user:action.user
            }
        default:
            return state;
    }
}

export default loginReducer;