import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handleAnswerQuestion} from "../actions/shared";
import {Redirect} from 'react-router-dom'

class PollCardQuestion extends Component {

    constructor(props) {
        super(props);
        this.state={
            submitted:false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        event.preventDefault()
        let answer = document.querySelector('input[name="question"]:checked').value

        const authedUser = this.props.login.user.id
        const qid =  this.props.match.params.question_Id

        this.props.dispatch(handleAnswerQuestion(authedUser,qid, answer))
        this.setState({submitted:true})
    }

    render(){



        let questionId = this.props.match.params.question_Id
        let questions = this.props.questions

        if(this.state.submitted){
            return <Redirect to={'/results/' + questionId}/>
        }

        if(questions[questionId] === undefined){
            return <Redirect to={'/error'}/>
        }

        let question = questions[questionId]
        let users = this.props.users

        let authorId = ''
        let author = ''
        let optionOne = '';
        let optionTwo = '';



        if(question !== undefined){

            authorId = question.author
            optionOne = question.optionOne.text
            optionTwo = question.optionTwo.text

        }

        if(users !== undefined) {
            author = users[question.author].name
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

function mapStateToProps({questions,users,login}){
    return{
        users,
        login,
        questions,
    }
}

export default connect(mapStateToProps)(PollCardQuestion)