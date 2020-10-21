import React, {Component} from 'react';
import {connect} from 'react-redux';

import PollCardHome from "./PollCardHome";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab:'unanswered'
        }
        this.handleAnsweredClick = this.handleAnsweredClick.bind(this)
        this.handleUnansweredClick = this.handleUnansweredClick.bind(this)
    }

    handleAnsweredClick(){
        this.setState({activeTab:'answered'})
    }

    handleUnansweredClick(){
        this.setState({activeTab:'unanswered'})
    }

    render(){

        const {login, users, questions} = this.props

        //get user
        const currentUser = login.user;

        //get answered questions ids
        const answers = currentUser.answers
        const answeredQuestionsIds = Object.keys(currentUser.answers)

        //get all question ids
        const allQuestionIds = Object.keys(questions)

        //filter unanswered questions
        //
        const unansweredQuestionsIds = allQuestionIds.filter((id)=>{

            return !answeredQuestionsIds.includes(id)
        })

        console.log("this is the one:",unansweredQuestionsIds)


        return (
            <div className='home-container'>
                <div className='home-poll-menu-container'>
                    <div className='home-poll-menu_head'>
                        <div
                            className='home-poll-menu_head_unanswered'
                            onClick={this.handleUnansweredClick}
                        >
                            <span>Unanswered Questions</span>
                        </div>
                        <div
                            className='home-poll-menu_head_answered'
                            onClick={this.handleAnsweredClick}
                        >
                            <span>Answered Questions</span>
                        </div>

                    </div>
                    <div className='home-poll-menu_body'>
                        {
                            this.state.activeTab === 'unanswered'
                                ? <div>
                                    {this.props.question && <ul className='home-poll-menu_body_ul'>
                                        {unansweredQuestionsIds.map((item)=>{
                                            return <PollCardHome key={item} questionKey={item}/>
                                        })}
                                    </ul>}
                                </div>
                                : <div>
                                    {this.props.question && <ul className='home-poll-menu_body_ul'>
                                        {answeredQuestionsIds.map((item)=>{
                                            return <PollCardHome key={item} questionKey={item}/>
                                        })}
                                    </ul>}
                                </div>
                        }

                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({questions,login,users}){

    return {
        question:questions["8xf0y6ziyjabvozdd253nd"],
        questions:questions,
        login:login,
        users:users

    }
}

export default connect(mapStateToProps)(Home)