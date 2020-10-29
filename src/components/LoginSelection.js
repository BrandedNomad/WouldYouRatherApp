import React,{Component} from 'react';
import {connect} from 'react-redux';
import {FiChevronDown} from "react-icons/all";
import {Redirect} from 'react-router-dom'

import {login} from "../actions/login";

/**
 * @description Represents the dropdown list of available users that can be logged in
 * @class
 */
class LoginSelection extends Component {

    /**
     * @description Initializes state and binds methods to component
     * @constructor
     * @param prop
     */
    constructor(prop) {
        super(prop);
        this.state={
            selected:this.props.users.sarahedo,
            isActive:false,
            isLoggedIn:false,
        }
        this.handleListClick = this.handleListClick.bind(this)
        this.handleItemClick = this.handleItemClick.bind(this)
        this.handleButtonClick = this.handleButtonClick.bind(this)
    }

    /**
     * @description Logs in selected user and redirects user to home page once logged in
     * @method
     * @param event
     */
    handleButtonClick(event){
        this.props.dispatch(login(this.state.selected))
        this.setState({isLoggedIn:true})
    }

    /**
     * @description Toggles the display of list of users when clicking on dropdown-chevron icon
     * @method
     * @param event
     */
    handleListClick(event){
        this.setState({
            isActive:!this.state.isActive
        })
    }

    /**
     * @description When selecting a user, Gets the selected user's details from props and updates the selected user display
     * @param event
     */
    handleItemClick(event){
        const id =  event.currentTarget.getAttribute('value')
        this.setState({
            selected:this.props.users[id],
            isActive:!this.state.isActive
        })

    }

    /**
     * @description Renders the component
     * @method
     * @returns {JSX.Element}
     */
    render(){

        //destructure component state
        const {isLoggedIn} = this.state

        //get users
        const users = this.props.users;

        //create an array of user Id's
        const userIds = Object.keys(users);

        //Checks if user is logged in and redirect to homepage if user is logged in.
        if(isLoggedIn){
            return <Redirect to='/'/>
        }


        return (
            <div>
                <div className="login-form">
                    <div className='login_selection_container' onClick={this.handleListClick}>
                        <img
                            className='login_selection_image'
                            alt={this.state.selected.id}
                            src={'./img/' + this.state.selected.id + '.png'}
                            onError={(e)=>{e.target.onerror = null; e.target.src='../img/' + this.state.selected.id + '.png'}}
                        />
                        <span className='login_selection_text'>{this.state.selected.name}</span>
                        <div className="login_selection_chevron_container">
                            <FiChevronDown className="login_selection_chevron"/>
                        </div>
                    </div>
                    {this.state.isActive && <div className="login_dropdown" >
                        <ul
                            className='login_dropdown_ul'
                        >
                            {userIds.map((id)=>{
                                return (
                                    <li
                                        className='login_dropdown_item'
                                        key={id}
                                        value={id}
                                        onClick={(event)=>{this.handleItemClick(event)}}
                                    >
                                        <img
                                            className='login_dropdown_item_image'
                                            alt={id}
                                            src={'./img/' + id + '.png'}
                                            onError={(e)=>{e.target.onerror = null; e.target.src='../img/' + id + '.png'}}
                                        />
                                        <span>{users[id].name}</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>}
                </div>
                <button
                    className='login-form_button'
                    onClick={this.handleButtonClick}
                >
                    LOGIN
                </button>
            </div>
        )
    }
}

/**
 * @description Maps Redux store state to component props
 * @function
 * @param login
 * @param users
 * @returns {{login: *, users: *}}
 */
const mapStateToProps = ({login,users})=>{
    return {
        login,
        users
    }
}

/**
 * @description connects component to Redux store and exports it
 */
export default connect(mapStateToProps)(LoginSelection);