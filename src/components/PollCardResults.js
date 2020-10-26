import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";
import {noTab} from "../actions/navigation";

/**
 * @description Represents the view where users can view a selected poll's results
 * @class
 */
class PollCardResults extends Component {

    /**
     * @description Updates the activeTabState of NavBar once component has mounted
     * @method
     */
    componentDidMount(){
        this.props.dispatch(noTab())
    }

    /**
     * @description Renders and instance of PollCardResults
     * @returns {JSX.Element}
     */
    render() {

        //todo: refactor into smaller functions

        //Gets the selected poll's id from url
        const resultsId = this.props.match.params.resultsId

        //Gets all questions from the store
        const results = this.props.questions

        //Checks if the selected poll exists, if not, redirects user to error (404) page (prevents app from crashing)
        if(results[resultsId] === undefined){
            return <Redirect to={'/error'}/>
        }

        //Gets the desired poll from list of questions
        const result = results[resultsId]

        //Gets a list of users from store
        const users = this.props.users

        //initializing variables
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

        //Checks if the selected poll have been retrieved from the store before accessing its values.
        if(result !== undefined){

            optionOne = result.optionOne
            optionTwo = result.optionTwo
            name = users[result.author].name
            totalVotes = totalVotes.concat(optionOne.votes)
            totalVotes = totalVotes.concat(optionTwo.votes)
            totalVotesNumber = totalVotes.length

            //calculating percentages of total answered
            percentageOptionOne =  Math.floor((optionOne.votes.length / totalVotesNumber) * 100)
            percentageOptionTwo =  Math.floor((optionTwo.votes.length / totalVotesNumber) * 100)

            //creating style attribute objects that will display the percentage bar
            optionOneStyle = {
                width: percentageOptionOne + '%'
            }

            optionTwoStyle={
                width:percentageOptionTwo + "%"
            }

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

/**
 * @description Maps the State from Redux store to component props
 * @function
 * @param login
 * @param users
 * @param questions
 * @returns {{currentUser: string | null | number | PublicKeyCredentialUserEntity, questions: *, users: *}}
 */
function mapStateToProps({login,users,questions}){
    return {
        currentUser:login.user,
        questions,
        users
    }
}

/**
 * @description Connects the component to the Redux store
 */
export default connect(mapStateToProps)(PollCardResults)

