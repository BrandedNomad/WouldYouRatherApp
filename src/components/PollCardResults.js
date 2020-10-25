import React, {Component} from 'react';
import {connect} from 'react-redux';

class PollCardResults extends Component {
    render() {
        return(
            <div className='poll-card-results-page'>
                <div className='poll-card-results-container'>
                    <div className='poll-card-results-header'>
                        <p className='poll-card-results-header_text'>Asked by Fart Face</p>
                    </div>
                    <div className='poll-card-results-body'>
                        <div className='poll-card-results-image-container'>
                            <img src='../img/johndoe.png' alt='avatar'/>
                        </div>
                        <div className='poll-card-results-content-container'>
                            <p className='poll-card-results-content_title'>Results:</p>
                            <div className='poll-card-results-content_optionOne-container'>
                                {false &&
                                <div className='poll-card-results-user-choice-container'>
                                    <p className='poll-card-results-user-choice_text-your'>Your</p>
                                    <p className='poll-card-results-user-choice_text-vote'>Vote</p>
                                </div>}
                                <p
                                    className='poll-card-results-content_question'
                                >
                                    Would you rather run?
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
                            <div className='poll-card-results-content_optionTwo-container'>
                                {false &&
                                <div className='poll-card-results-user-choice-container'>
                                    <p className='poll-card-results-user-choice_text-your'>Your</p>
                                    <p className='poll-card-results-user-choice_text-vote'>Vote</p>
                                </div>}
                                <p
                                    className='poll-card-results-content_question'
                                >
                                    Would you rather run?
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

                </div>


            </div>
        )
    }
}

export default connect()(PollCardResults)

