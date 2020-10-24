import React, {Component} from 'react';
import {connect} from 'react-redux';

class PollCardQuestion extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        event.preventDefault()
        let choice = document.querySelector('input[name="question"]:checked').value;
        console.log("This event", choice)
    }

    render(){

        let questionId = this.props.match.params.questionId

        let question = this.props.questions[questionId]

        let authorId = ''
        let author = ''
        let optionOne = '';
        let optionTwo = '';

        if(question !== undefined){
            author = this.props.users[question.author].name
            authorId = question.author
            optionOne = question.optionOne.text
            optionTwo = question.optionTwo.text
            console.log("the author",optionTwo)
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
                                                value={optionOne}
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
                                                value={optionTwo}
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