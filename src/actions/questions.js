
export const INITIALIZE_QUESTIONS = 'INITIALIZE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_ANSWER = 'SAVE_ANSWER'

export const initializeQuestions = (questions)=>{

    return {
        type:INITIALIZE_QUESTIONS,
        questions
    }
}



export const addQuestion = (question)=>{
    return {
        type:ADD_QUESTION,
        question
    }
}

export const saveAnswerQuestion = (authedUser,qid,answer)=>{
    return {
        type:SAVE_ANSWER,
        answer:{
            authedUser,
            qid,
            answer
        }
    }
}

