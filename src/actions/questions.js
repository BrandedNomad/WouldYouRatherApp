export const INITIALIZE_QUESTIONS = 'INITIALIZE_QUESTIONS'

export const initializeQuestions = (questions)=>{

    return {
        type:INITIALIZE_QUESTIONS,
        questions
    }
}