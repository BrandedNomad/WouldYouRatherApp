import React, {Component} from 'react';
import {connect} from 'react-redux';

class PollCardResults extends Component {
    render() {

        const resultsId = this.props.match.params.resultsId
        const result = this.props.questions[resultsId]
        const users = this.props.users

        let name = ''
        let currentUser = this.props.currentUser

        let optionOne = ''
        let optionTwo = ''

        if(result !== undefined){

            optionOne = result.optionOne
            optionTwo = result.optionTwo
            name = users[result.author].name

            console.log("here it is:", result)
        }


        return(
            <div className='poll-card-results-page'>
                {result !== undefined && <div className='poll-card-results-container'>
                    <div className='poll-card-results-header'>
                        <p className='poll-card-results-header_text'>Asked by {name}</p>
                    </div>
                    <div className='poll-card-results-body'>
                        <div className='poll-card-results-image-container'>
                            <img
                                className='poll-card-results-image'
                                src={'../img/' + result.author + '.png'}
                                alt='avatar'
                            />
                        </div>
                        <div className='poll-card-results-content-container'>
                            <p className='poll-card-results-content_title'>Results:</p>
                            <div className='poll-card-results-content_option-container'>
                                {optionOne.votes.includes(currentUser.id) &&
                                <div className='poll-card-results-user-choice-container-outer'>
                                    <div className='poll-card-results-user-choice-container-absolute'>
                                        <div className='poll-card-results-user-choice-container'>
                                            <p className='poll-card-results-user-choice_text-your'>Your</p>
                                            <p className='poll-card-results-user-choice_text-vote'>Vote</p>
                                        </div>
                                    </div>
                                </div>
                                }
                                <p
                                    className='poll-card-results-content_question'
                                >
                                    Would you rather {optionOne.text}?
                                </p>
                                <div className='poll-card-results-content_bar-container'>
                                    <div className='poll-card-results-content_bar'>
                                        <p className='poll-card-results-content_bar-text'>90%</p>
                                    </div>
                                </div>
                                <div className='poll-card-results-content_total-container'>
                                    <p className='poll-card-results-content_total-text'>2 out of 3 votes</p>
                                </div>

                            </div>
                            <div className='poll-card-results-content_option-container'>
                                {optionTwo.votes.includes(currentUser.id) &&
                                <div className='poll-card-results-user-choice-container-outer'>
                                    <div className='poll-card-results-user-choice-container-absolute'>
                                        <div className='poll-card-results-user-choice-container'>
                                            <p className='poll-card-results-user-choice_text-your'>Your</p>
                                            <p className='poll-card-results-user-choice_text-vote'>Vote</p>
                                        </div>
                                    </div>
                                </div>
                                }
                                <p
                                    className='poll-card-results-content_question'
                                >
                                    Would you rather {optionTwo.text}?
                                </p>
                                <div className='poll-card-results-content_bar-container'>
                                    <div className='poll-card-results-content_bar'>
                                        <p className='poll-card-results-content_bar-text'>90%</p>
                                    </div>
                                </div>
                                <div className='poll-card-results-content_total-container'>
                                    <p className='poll-card-results-content_total-text'>2 out of 3 votes</p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>}


            </div>
        )
    }
}

function mapStateToProps({login,users,questions}){
    return {
        currentUser:login.user,
        questions,
        users
    }
}

export default connect(mapStateToProps)(PollCardResults)

