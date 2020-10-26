import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'

import {handleAddQuestion} from "../actions/shared";
import {newQuestionTab} from "../actions/navigation";

/**
 *@description Represents the view where users can create a new question or poll
 * @class
 */
class NewQuestion extends Component {

    /**
     * @description Initializes state and binds methods to components
     * @constructor
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            optionOneValue:'',
            optionTwoValue:'',
            redirect:false
        }
        this.handleOptionOneChange = this.handleOptionOneChange.bind(this)
        this.handleOptionTwoChange = this.handleOptionTwoChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    /**
     * @description Updates the activeTabState of NavBar once component has mounted
     * @method
     */
    componentDidMount(){
        this.props.dispatch(newQuestionTab())
    }

    /**
     * @description Updates the Value of option one everytime it changes
     * @method
     * @param event
     */
    handleOptionOneChange=(event)=>{
        if(event.target.value !== undefined){
            this.setState({optionOneValue:event.target.value})
        }
    }

    /**
     * @description Updates the value of option two everytime it changes
     * @method
     * @param event
     */
    handleOptionTwoChange=(event)=>{
        if(event.target.value !== undefined){
            this.setState({optionTwoValue:event.target.value})
        }
    }

    /**
     * @description Adds the new question when user clicks on submit
     * @method
     * @param event
     */
    handleSubmit(event){
        event.preventDefault()
        this.props.dispatch(handleAddQuestion(this.state.optionOneValue,this.state.optionTwoValue,this.props.currentUser.id))
        this.setState({redirect:true})
    }


    /**
     * @description Renders teh NewQuestion Component
     * @method
     * @returns {JSX.Element}
     */
    render(){

        //Checks if user have submitted the new question, and if so redirects user to home page
        if(this.state.redirect === true){
            return <Redirect to={'/'}/>
        }

        //gets the currently logged in user
        const currentUser = this.props.currentUser;

        //Checks to see if user is logged in, if not redirects to login page
        if(currentUser === undefined || currentUser === null){
            return <Redirect to={'/login'}/>
        }


        return(
            <div className='new-question-page'>
                <div className='new-question-container'>
                    <div className='new-question_header'>
                        <span className="new-question_header_title">Create New Question</span>
                    </div>
                    <div className='new-question_form-container'>
                        <div className="new-question_form_body-container-outer">
                            <div className="new-question_form_body-container-inner">
                                <img  className='new-question_form_img' src='./img/choice.jpg' alt='choice a or b'/>
                                <p className="new-question_form_title">Complete the question</p>
                                <p className="new-question_form_body">Would you rather...</p>
                            </div>
                        </div>
                        <form
                            className='new-question_form'
                            onSubmit={(event)=>{
                                this.handleSubmit(event)
                            }}
                        >
                            <input
                                className="new-question_option-one"
                                type="text"
                                value={this.state.optionOneValue}
                                onChange={(event)=>{
                                    this.handleOptionOneChange(event)
                                }}
                                placeholder='Enter Option One Text Here'
                            />
                            <div className='or-separator'><span className="or-line"><p className='or-text'>OR</p></span></div>
                            <input
                                className="new-question_option-two"
                                type='text'
                                value={this.state.optionTwoValue}
                                onChange={(event)=>{
                                    this.handleOptionTwoChange(event)
                                }}
                                placeholder='Enter Option Two text Here'
                            />
                            <button
                                type='submit'
                                className="new-question_form_button"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

/**
 * @description Maps Redux store state to component props
 * @function
 * @param login
 * @returns {{currentUser: string | null | number | PublicKeyCredentialUserEntity}}
 */
function mapStateToProps({login}){
    return {
        currentUser:login.user,
    }
}

/**
 * @description Connects component to the Redux store and exports it
 */
export default connect(mapStateToProps)(NewQuestion)