import {_getUsers,_getQuestions} from "../utils/_DATA";
import {initializeUsers} from "./users";




export const handleInitialData = ()=>{
    return (dispatch)=>{
        return Promise.all([_getUsers()]).then(([users])=>{
            dispatch(initializeUsers(users))
        })
    }
}