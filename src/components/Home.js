import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect,Link} from 'react-router-dom'

import PollCardHome from "./PollCardHome";

/**
 * @description Represents Home component
 * @class
 */
class Home extends Component {

    /**
     * @description Initializes state and binds functions to component
     * @constructor
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            activeTab:'unanswered'
        }
        this.handleAnsweredClick = this.handleAnsweredClick.bind(this)
        this.handleUnansweredClick = this.handleUnansweredClick.bind(this)
    }

    /**
     * @description Sets the active tab to answered when clicked on
     * @method
     */
    handleAnsweredClick(){
        this.setState({activeTab:'answered'})
    }

    /**
     * @description Sets the active tab to unanswered when clicked on
     * @method
     */
    handleUnansweredClick(){
        this.setState({activeTab:'unanswered'})
    }

    /**
     * @description Renders the component
     * @returns {JSX.Element}
     */
    render(){

        //todo: refactor the below code into functions

        //destructure props
        const {login, questions,users} = this.props

        //get user
        const currentUser = login.user;

        //check if user is logged in
        if(currentUser === undefined || currentUser === null){
            return <Redirect to={'/login'}/>
        }

        //get answered questions ids
        const answers = users[currentUser.id].answers
        const answeredQuestionsIds = Object.keys(answers)

        //get all question ids
        const allQuestionIds = Object.keys(questions)

        //filter for unanswered questions
        const unansweredQuestionsIds = allQuestionIds.filter((id)=>{
            return !answeredQuestionsIds.includes(id)
        })

        //turn questions into an array
        const questionsArray = Object.entries(questions)

        //get unanswered Questions
        let unansweredQuestions = questionsArray.filter((question)=>{
            return unansweredQuestionsIds.includes(question[0])
        }).map((question)=>{
            return question[1]
        })

        //get answered Questions
        let answeredQuestions = questionsArray.filter((question)=>{
            return answeredQuestionsIds.includes(question[0])
        }).map((question)=>{
            return question[1]
        })

        //order questions
        unansweredQuestions.sort((a,b)=>b.timestamp - a.timestamp)
        answeredQuestions.sort((a,b)=>b.timestamp - a.timestamp)

        return (
            <div className='home-container'>
                <div className='home-poll-menu-container'>
                    <div className='home-poll-menu_head'>
                        <div
                            className={this.state.activeTab === 'unanswered'? 'home-poll-menu_head_unanswered--active':'home-poll-menu_head_unanswered'}
                            onClick={this.handleUnansweredClick}
                        >
                            <span>Unanswered Questions</span>
                        </div>
                        <div
                            className={this.state.activeTab === 'answered'? 'home-poll-menu_head_answered--active':'home-poll-menu_head_answered'}
                            onClick={this.handleAnsweredClick}
                        >
                            <span>Answered Questions</span>
                        </div>

                    </div>
                    <div className='home-poll-menu_body'>
                        {
                            this.state.activeTab === 'unanswered'
                                ? <div>
                                    <ul className='home-poll-menu_body_ul'>
                                        {unansweredQuestions.map((item)=>{
                                            return <PollCardHome key={item.id} question={item} tab={this.state.activeTab}/>
                                        })}
                                        {
                                            unansweredQuestions.length === 0 &&
                                                <p>No Unanswered Questions! Try creating a <Link to={'/add'}>New Question</Link></p>
                                        }
                                    </ul>
                                </div>
                                : <div>
                                    <ul className='home-poll-menu_body_ul'>
                                        {answeredQuestions.map((item)=>{
                                            return <PollCardHome key={item.id} question={item} tab={this.state.activeTab}/>
                                        })}
                                    </ul>
                                </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

/**
 * @description Maps state from redux store to component props
 * @param questions
 * @param login
 * @param users
 * @returns {{questions: *, login: *, users: *}}
 */
function mapStateToProps({questions,login,users}){

    return {
        questions:questions,
        login:login,
        users:users
    }
}

/**
 * @description Connects component to redux store and exports it
 */
export default connect(mapStateToProps)(Home)