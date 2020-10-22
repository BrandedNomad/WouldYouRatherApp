

export const INITIALIZE_USERS = 'INITIALIZE_USERS'
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION'

export const initializeUsers = (users)=>{

    return {
        type:INITIALIZE_USERS,
        users
    }
}


export const addUserQuestion = (question)=>{
    return {
        type:ADD_USER_QUESTION,
        userId:question.userId,
        questionId:question.questionId
    }

}