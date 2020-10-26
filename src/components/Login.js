import React, {Component} from 'react';
import {connect} from 'react-redux';
import LoginSelection from "./LoginSelection";

class Login extends Component {


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
                    />
                    <p className='login-box_body-text'>Login</p>
                    <LoginSelection/>
                </div>
                : <img
                        className="loading-login"
                        src='./img/loading.gif'
                        alt='loading-spinner'
                    />}

            </div>
        )
    }
}

const mapStateToProps = ({login,users})=>{
    return {
        login,
        users
    }
}

export default connect(mapStateToProps)(Login);