import {_saveQuestion} from "../utils/_DATA";

export const INITIALIZE_QUESTIONS = 'INITIALIZE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'

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

