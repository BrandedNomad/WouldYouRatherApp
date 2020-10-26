import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'

/**
 * @description Represents the individual poll item cards displayed on the home page
 * @class
 */
class PollCardHome extends Component {

    /**
     * @description Initializes state and binds methods to the component
     * @constructor
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            submitted:false
        }
        this.handleCardClick = this.handleCardClick.bind(this)
    }

    /**
     * @description Updates submitted state, which in turn will redirect user to chosen poll
     * @method
     * @param event
     */
    handleCardClick(event){
        this.setState({submitted:true})
    }


    /**
     * @description Renders and instance of the component
     * @method
     * @returns {JSX.Element}
     */
    render(){

        //Redirects user to the view where they can answer the selected poll
        if(this.state.submitted === true && this.props.tab === 'unanswered'){
            return <Redirect to={'/questions/' + this.props.questionId}/>
        }

        //Redirects user to the view where the can see the results of the selected poll
        if(this.state.submitted === true && this.props.tab === 'answered'){
            return <Redirect to={'/results/' + this.props.questionId}/>
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

/**
 * @description Maps the Redux store state to the component props
 * @function
 * @param questions
 * @param users
 * @param question
 * @param tab
 * @returns {{questionId: *, tab: *, authorName: *, authorId: (module:jsdoc/package.Package~PersonInfo|string|{mustHaveValue: boolean, onTagged(*, {value?: *}): void}|{type: string, items: {type: string}}|{anyOf: [{type: string}, {additionalProperties: boolean, type: string, properties: {name: {type: string}, email: {type: string}, url: {format: string, type: string}}}]}|string|*|PackageJson.Person), optionOne: (string)}}
 */
function mapStateToProps({questions,users},{question,tab}){
    const user = users[question.author]
    return{
        questionId:question.id,
        authorId:question.author,
        authorName:user.name,
        optionOne:question.optionOne.text,
        tab
    }
}

/**
 * @description Connects component to Redux store and exports it.
 */
export default connect(mapStateToProps)(PollCardHome)