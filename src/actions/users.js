

export const INITIALIZE_USERS = 'INITIALIZE_USERS'

export const initializeUsers = (users)=>{

    return {
        type:INITIALIZE_USERS,
        users
    }
}

