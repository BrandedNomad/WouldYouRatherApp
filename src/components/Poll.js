import React, {Component} from "react";
import {connect} from "react-redux";

import PollCardQuestion from "./PollCardQuestion";
import PollCardResults from "./PollCardResults";

class Poll extends Component {
    render(){
        return(
            <div>
                <PollCardQuestion qid={this.props.match.params.questionId}/>
            </div>
        )

    }
}

export default connect()(Poll)