import React, {Component} from 'react';
import {connect} from 'react-redux';

class PollCardResults extends Component {
    render() {

        //todo: refactor into smaller functions

        const resultsId = this.props.match.params.resultsId
        const result = this.props.questions[resultsId]
        const users = this.props.users

        let name = ''
        let currentUser = this.props.currentUser

        let optionOne = ''
        let optionTwo = ''
        let totalVotes =[]
        let percentageOptionOne = 0;
        let percentageOptionTwo = 0;
        let totalVotesNumber=0;
        let optionOneStyle={};
        let optionTwoStyle={};

        if(result !== undefined){

            optionOne = result.optionOne
            optionTwo = result.optionTwo
            name = users[result.author].name
            totalVotes = totalVotes.concat(optionOne.votes)
            totalVotes = totalVotes.concat(optionTwo.votes)

            totalVotesNumber = totalVotes.length

            percentageOptionOne =  Math.floor((optionOne.votes.length / totalVotesNumber) * 100)
            percentageOptionTwo =  Math.floor((optionTwo.votes.length / totalVotesNumber) * 100)

            optionOneStyle = {
                width: percentageOptionOne + '%'
            }

            optionTwoStyle={
                width:percentageOptionTwo + "%"
            }



            console.log("here it is:", result)
            console.log("total votes:",totalVotes)
            console.log("return value:", percentageOptionOne, percentageOptionTwo)
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
                                    <div
                                        className='poll-card-results-content_bar'
                                        style={optionOneStyle}
                                    >
                                    </div>
                                    <div className='poll-card-results-content_bar-text-container'>
                                        <p
                                            className='poll-card-results-content_bar-text'
                                        >
                                            {percentageOptionOne}%
                                        </p>
                                    </div>
                                </div>
                                <div className='poll-card-results-content_total-container'>
                                    <p className='poll-card-results-content_total-text'>{optionOne.votes.length} out of {totalVotes.length} votes</p>
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
                                    <div
                                        className='poll-card-results-content_bar'
                                        style={optionTwoStyle}
                                    >
                                    </div>
                                    <div className='poll-card-results-content_bar-text-container'>
                                        <p
                                            className='poll-card-results-content_bar-text'
                                        >
                                            {percentageOptionTwo}%
                                        </p>
                                    </div>
                                </div>
                                <div className='poll-card-results-content_total-container'>
                                    <p className='poll-card-results-content_total-text'>{optionTwo.votes.length} out of {totalVotes.length} votes</p>
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

