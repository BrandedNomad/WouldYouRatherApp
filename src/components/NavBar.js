import React,{Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from "react-router-dom";

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
                        <NavLink
                            className="nav-pages_home-container"
                            to="/"
                        >
                            <span className="nav-pages_home-text">Home</span>
                        </NavLink>
                        <NavLink
                            className="nav-pages_question-container"
                            to='/add'
                        >
                            <span className="nav-pages_question-text">New Question</span>
                        </NavLink>
                        <NavLink
                            className="nav-pages_leader-container"
                            to='/leaderboard'
                        >
                            <span className="nav-pages_leader-text">Leader Board</span>
                        </NavLink>
                    </div>
                    {this.props.isLoggedIn && <div className="nav-login">
                        <div className='nav-login-user-container'>
                            <span className='nav-login_user-name'>Hello, {this.props.user.name}</span>
                            <img
                                className='nav-login_avatar'
                                src={'./img/' + this.props.user.id + '.png'}
                                alt='avatar'
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