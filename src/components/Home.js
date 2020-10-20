import React, {Component} from 'react';
import {connect} from 'react-redux';

import PollCardHome from "./PollCardHome";

class Home extends Component {
    render(){

        const questionKeys = Object.keys(this.props.questions)
        console.log("keys", questionKeys)

        return (
            <div className='home-container'>
                <div className='home-poll-menu-container'>
                    <div className='home-poll-menu_head'>
                        <div className='home-poll-menu_head_unanswered'>
                            <span>Unanswered Questions</span>
                        </div>
                        <div className='home-poll-menu_head_answered'>
                            <span>Answered Questions</span>
                        </div>

                    </div>
                    <div className='home-poll-menu_body'>
                        <div>
                            {this.props.question && <ul className='home-poll-menu_body_ul'>
                                {questionKeys.map((item)=>{
                                    return <PollCardHome key={item} questionKey={item}/>
                                })}
                            </ul>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({questions}){

    return {
        question:questions["8xf0y6ziyjabvozdd253nd"],
        questions:questions

    }
}

export default connect(mapStateToProps)(Home)