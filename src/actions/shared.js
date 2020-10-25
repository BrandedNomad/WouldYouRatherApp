import {_getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer} from "../utils/_DATA";
import {initializeUsers,addUserQuestion,saveUserAnswer} from "./users";
import {initializeQuestions, addQuestion, saveAnswerQuestion} from "./questions";


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


export const handleAnswerQuestion=(authedUser, qid, answer)=>{

    return (dispatch)=>{

        return _saveQuestionAnswer({authedUser, qid, answer})
            .then((result)=>{
                dispatch(saveAnswerQuestion(authedUser,qid,answer))
                dispatch(saveUserAnswer(authedUser,qid,answer))
            })
            .catch((error)=>{
                console.log(error)
            })
    }

}