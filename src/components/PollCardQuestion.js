import React, {Component} from 'react';
import {connect} from 'react-redux';

class PollCardQuestion extends Component {
    render(){

        return(
            <div className='poll-card-questions-page'>
                <div className='poll-card-questions-container'>
                    <div className='poll-card-questions_header'>
                        <p>Donkey McGinnis Asks:</p>
                    </div>
                    <div className='poll-card-questions_body'>
                        <div className='poll-card-questions_body_image-container'>
                            <img
                                className='poll-card-questions_body_image'
                                src={'./img/johndoe.png'}
                                alt='avatar'
                            />
                        </div>
                        <div className='poll-card-questions_body_content-container'>
                            <p className='poll-card-questions_body_title'>Would you Rather...</p>
                            <form>
                                <input
                                    type='radio'
                                    id='optionOne'
                                    name='optionOne'
                                    value='optionOne'
                                    className='poll-card-questions_body_optionOne-button'
                                />
                                <label
                                    htmlFor='optionOne'
                                    className='poll-card-questions_body_optionOne-label'
                                >Run</label>
                                <input
                                    type='radio'
                                    id='optionTwo'
                                    name='optionTwo'
                                    value='optionTwo'
                                    className='poll-card-questions_body_optionTwo-button'
                                />
                                <label
                                    htmlFor='optionTwo'
                                    className='poll-card-questions_body_optionOne'
                                >Swim</label>
                                <button
                                    className='poll-card-questions_body_button'
                                    type='submit'
                                >Submit</button>
                            </form>


                        </div>
                    </div>
                </div>

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