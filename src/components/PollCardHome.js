import React,{Component} from 'react';
import {connect} from 'react-redux';

class PollCardHome extends Component {

    constructor(props) {
        super(props);
        this.handleCardClick = this.handleCardClick.bind(this)
    }

    handleCardClick(event){

    }


    render(){
        return(
            <div className='poll-card-home-container'>
                <div className='poll-card-home-header'>
                    <p className ='poll-card-home-header_title'>{this.props.authorName + " asks:"}</p>
                </div>
                <div className='poll-card-home-body'>
                    <div className='poll-card-home-body_img-container'>
                        <img
                            className='poll-card-home-body_img'
                            src={'./img/' + this.props.authorId + '.png'}
                            alt="avatar"
                        />
                    </div>
                    <div className='poll-card-home-body_content-container'>
                        <p className='poll-card-home-body_content-container_title'>would you rather</p>
                        <p className='poll-card-home-body_content-container_subtitle'>...{this.props.optionOne}</p>
                        <button
                            className='poll-card-home-body_content-container_button'
                            onClick={this.handleCardClick}
                        >View Poll</button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({questions,users}){
    const question = questions["8xf0y6ziyjabvozdd253nd"]

    console.log(questions)

    //const user = users[question.author]

    console.log("yes",question)

    return{
        // questionId:question.id,
        // authorId:question.author,
        // authorName:users.name,
        // optionOne:question.optionOne
    }
}

export default connect(mapStateToProps)(PollCardHome)