
const usersReducer = (state=[],action)=>{
    switch(action.type){
        case 'GET_USER':
            return
        case 'ALL_USERS':
            return
        default:
            return state
    }
}

export default usersReducer