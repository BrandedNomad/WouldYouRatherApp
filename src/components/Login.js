import React, {Component} from 'react';
import {connect} from 'react-redux';
import LoginSelection from "./LoginSelection";
import {noTab} from "../actions/navigation";

/**
 * @description Represents the login view
 * @class
 */
class Login extends Component {

    /**
     * @description Updates the active Tab on the NavBar once component has loaded.
     * @method
     */
    componentDidMount() {
        this.props.dispatch(noTab())
    }


    /**
     * @description Renders the Login component
     * @method
     * @returns {JSX.Element}
     */
    render() {
        return (
            <div className='login-container'>
                {this.props.users.sarahedo
                    ? <div className='login-box'>
                    <div className='login-box_header'>
                        <p className='login-box_header_title'>Welcome to the "Would You Rather?" game!</p>
                        <p className='login-box_header_subtitle'>Please sign in to continue</p>
                    </div>
                    <img
                        alt='would you rater'
                        src='./img/choiceb.jpg'
                        className='login-box_image'
                        onError={(e)=>{e.target.onerror = null; e.target.src="../img/choiceb.jpg"}}
                    />
                    <p className='login-box_body-text'>Login</p>
                    <LoginSelection/>
                </div>
                : <img
                        className="loading-login"
                        src='./img/loading.gif'
                        alt='loading-spinner'
                        onError={(e)=>{e.target.onerror = null; e.target.src="../img/loading.gif"}}
                    />}
            </div>
        )
    }
}

/**
 * @description Maps state from Redux store to the component props
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
 * @description Connects component to the Redux store and exports it
 */
export default connect(mapStateToProps)(Login);