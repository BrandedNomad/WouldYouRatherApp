import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handleAnswerQuestion} from "../actions/shared";
import {Redirect} from 'react-router-dom'
import { noTab} from "../actions/navigation";

/**
 * @description Represents the view where users can answer a selected poll question
 * @class
 */
class PollCardQuestion extends Component {

    /**
     * @description Initializes state and binds methods to component instance
     * @constructor
     * @param props
     */
    constructor(props) {
        super(props);
        this.state={
            submitted:false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    /**
     * @description Updates the activeTabState of NavBar once component has mounted
     * @method
     */
    componentDidMount(){
        this.props.dispatch(noTab())
    }

    /**
     * @description Adds a users answer to poll results
     * @method
     * @param event
     */
    handleSubmit(event){
        event.preventDefault()

        //gets the users choice from form
        let answer = document.querySelector('input[name="question"]:checked').value

        //gets the logged in user details
        const authedUser = this.props.login.user.id

        //gets the logged in user's id
        const qid =  this.props.match.params.question_Id

        //Adds the users answer or choice to poll results and updates the user's answers
        this.props.dispatch(handleAnswerQuestion(authedUser,qid, answer))

        //updates submitted state which is used to redirect the user to the poll results
        this.setState({submitted:true})
    }

    render(){

        //todo: Refactor below code into functions

        //Get the poll's id from the url
        let questionId = this.props.match.params.question_Id

        //Gets the list of question in the store
        let questions = this.props.questions

        //Redirects the user to poll results if he has already submitted his/her answer
        if(this.state.submitted){
            return <Redirect to={'/results/' + questionId}/>
        }

        //checks if the poll in question exists, if not, redirect user to error page (prevents app from crashing)
        if(questions[questionId] === undefined){
            return <Redirect to={'/error'}/>
        }

        //Gets the specified poll item from list of questions
        let question = questions[questionId]

        //gets a list of users from store
        let users = this.props.users

        //initializing variables
        let authorId = ''
        let author = ''
        let optionOne = '';
        let optionTwo = '';

        //Ensures that question has been loaded from state before trying to access its contents
        if(question !== undefined){
            authorId = question.author
            optionOne = question.optionOne.text
            optionTwo = question.optionTwo.text
        }

        //Ensures that users has been loaded from state before trying to access its contents
        if(users !== undefined) {
            author = users[question.author].name //finds the name of the question author
        }


        return(
            <div className='poll-card-questions-page'>
                {
                    question !== undefined
                        ? <div className='poll-card-questions-container'>
                            <div className='poll-card-questions_header-container'>
                                <p className='poll-card-questions_header-text'>{author} Asks:</p>
                            </div>
                            <div className='poll-card-questions_body'>
                                <div className='poll-card-questions_body_image-container'>
                                    <img
                                        className='poll-card-questions_body_image'
                                        src={'../img/' + authorId + '.png'}
                                        alt='avatar'
                                    />
                                </div>
                                <div className='poll-card-questions_body_content-container'>
                                    <p className='poll-card-questions_body_title'>Would you Rather...</p>
                                    <form
                                        className='poll-card-questions_body_form'
                                        onSubmit={(event)=>{
                                            this.handleSubmit(event)
                                        }}
                                    >
                                        <div className='poll-card-questions_body_optionOne-container'>
                                            <input
                                                type='radio'
                                                id='optionOne'
                                                name='question'
                                                value='optionOne'
                                                defaultChecked={true}
                                                className='poll-card-questions_body_optionOne-button'
                                            />
                                            <label
                                                htmlFor='optionOne'
                                                className='poll-card-questions_body_optionOne-label'
                                            >{optionOne}</label>
                                        </div>
                                        <div className='poll-card-questions_body_optionTwo-container'>
                                            <input
                                                type='radio'
                                                id='optionTwo'
                                                name='question'
                                                value='optionTwo'
                                                className='poll-card-questions_body_optionTwo-button'
                                            />
                                            <label
                                                htmlFor='optionTwo'
                                                className='poll-card-questions_body_optionTwo-label'
                                            >{optionTwo}</label>
                                        </div>
                                        <button
                                            className='poll-card-questions_body_button'
                                            type='submit'
                                        >Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        : <img src='../img/loading.gif' alt='loading-spinner'/>
                }
            </div>
        )
    }
}

/**
 * @description Maps state from Redux store to component props
 * @function
 * @param questions
 * @param users
 * @param login
 * @returns {{questions: *, login: *, users: *}}
 */
function mapStateToProps({questions,users,login}){
    return{
        users,
        login,
        questions,
    }
}

/**
 * @description Connects component to the Redux store and exports it
 */
export default connect(mapStateToProps)(PollCardQuestion)