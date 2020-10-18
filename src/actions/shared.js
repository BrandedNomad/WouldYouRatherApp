import {_getUsers,_getQuestions} from "../utils/_DATA";
import {initializeUsers} from "./users";
import {initializeQuestions} from "./questions";


export const handleInitialData = ()=>{
    return (dispatch)=>{
        return getInitialData()
            .then(({users,questions})=>{
                dispatch(initializeUsers(users))
                dispatch(initializeQuestions(questions))
            })
    }
}


function getInitialData(){
    return Promise.all([
        _getUsers(),
        _getQuestions()
    ]).then(([users,questions])=>({
        users,questions
    }))
}