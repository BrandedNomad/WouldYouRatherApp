import React, {Component} from 'react';
import {connect} from 'react-redux';

import PollCardHome from "./PollCardHome";

class Home extends Component {
    render(){

        const questionKeys = Object.keys(this.props.questions)
        console.log("keys", questionKeys)

        return (
            <div>
                {this.props.question && <ul>
                    {questionKeys.map((item)=>{
                        return <PollCardHome key={item} questionKey={item}/>
                    })}
                </ul>}
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