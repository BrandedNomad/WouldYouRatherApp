import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Redirect,NavLink} from "react-router-dom";

import {logout} from "../actions/login";



class NavBar extends Component {

    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogout(){
        console.log("logged out")
        this.props.dispatch(logout())


    }

    render(){


        return(
            <div className="nav-container">
                <div className='nav-center'>
                    <div className="nav-pages">
                        <div className="nav-pages_home-container">
                            <span className="nav-pages_home-text">Home</span>
                        </div>
                        <div className="nav-pages_question-container">
                            <span className="nav-pages_question-text">New Question</span>
                        </div>
                        <div className="nav-pages_leader-container">
                            <span className="nav-pages_leader-text">Leader Board</span>
                        </div>
                    </div>
                    {this.props.isLoggedIn && <div className="nav-login">
                        <div className='nav-login-user-container'>
                            <span className='nav-login_user-name'>Hello, {this.props.user.name}</span>
                            <img
                                className='nav-login_avatar'
                                src={'./img/' + this.props.user.id + '.png'}
                            />
                        </div>
                        <div className='nav-login_logout-container'>
                            <NavLink
                                to='/login'
                                className ='nav-login_logout-text'
                                onClick={this.handleLogout}
                            >
                                Logout
                            </NavLink>
                        </div>

                    </div>}
                </div>

            </div>
        )
    }
}

function mapStateToProps({login}){
    return {
        user:login.user,
        isLoggedIn:login.state
    }
}

export default connect(mapStateToProps)(NavBar)