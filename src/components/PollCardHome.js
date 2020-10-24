import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'

class PollCardHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            submitted:false
        }
        this.handleCardClick = this.handleCardClick.bind(this)
    }

    handleCardClick(event){
        this.setState({submitted:true})
    }


    render(){

        if(this.state.submitted === true){
            return <Redirect to={'/questions/' + this.props.questionId}/>
        }

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
                        <p className='poll-card-home-body_content-container_subtitle'>{"..." + this.props.optionOne}</p>
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

function mapStateToProps({questions,users},{question}){
    const user = users[question.author]
    return{
        questionId:question.id,
        authorId:question.author,
        authorName:user.name,
        optionOne:question.optionOne.text
    }
}

export default connect(mapStateToProps)(PollCardHome)