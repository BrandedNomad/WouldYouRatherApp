import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'

import {handleAddQuestion} from "../actions/shared";

/**
 *
 */
class NewQuestion extends Component {

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

    handleOptionOneChange=(event)=>{
        if(event.target.value !== undefined){
            this.setState({optionOneValue:event.target.value})
        }
    }

    handleOptionTwoChange=(event)=>{
        if(event.target.value !== undefined){
            this.setState({optionTwoValue:event.target.value})
        }
    }

    handleSubmit(event){
        event.preventDefault()
        console.log("submitted",this.state.optionOneValue, this.state.optionTwoValue,this.props.currentUser.id)
        this.props.dispatch(handleAddQuestion(this.state.optionOneValue,this.state.optionTwoValue,this.props.currentUser.id))

        //todo: navigate to home once submited
        this.setState({redirect:true})

    }




    render(){

        if(this.state.redirect === true){
            return <Redirect to={'/'}/>
        }

        const currentUser = this.props.currentUser;

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

function mapStateToProps({login}){
    return {
        currentUser:login.user,
    }
}

export default connect(mapStateToProps)(NewQuestion)