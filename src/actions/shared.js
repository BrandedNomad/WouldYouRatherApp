import {_getUsers, _getQuestions, _saveQuestion} from "../utils/_DATA";
import {initializeUsers,addUserQuestion} from "./users";
import {initializeQuestions, addQuestion} from "./questions";


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



export const handleAddQuestion=(optionOneText, optionTwoText, author)=>{
    return (dispatch)=>{

        return _saveQuestion({optionOneText,optionTwoText,author})
            .then((formattedQuestion)=>{
                dispatch(addQuestion(formattedQuestion))
                dispatch(addUserQuestion({userId:author,questionId:formattedQuestion.id}))
            }).catch((error)=>{
                console.log("there has been an error",error)
            })

    }

}