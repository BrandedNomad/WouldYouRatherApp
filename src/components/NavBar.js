import React,{Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from "react-router-dom";

import {logout} from "../actions/login";

/**
 * @description Represents the Navigation bar at the top of the page
 * @class
 */
class NavBar extends Component {

    /**
     * @description Initializes state and binds methods to component
     * @constructor
     * @param props
     */
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this)

    }

    /**
     * @description Logs out current user
     * @method
     */
    handleLogout(){
        console.log("logged out")
        this.props.dispatch(logout())


    }


    /**
     * @description Renders the NavBar component
     * @returns {JSX.Element}
     */
    render(){

        const activeTab = this.props.activeTab.activeTab


        return(
            <div className="nav-container">
                <div className='nav-center'>
                    <div className="nav-pages">
                        <NavLink
                            className={activeTab === 'Home' ? "nav-pages_home-container-active" : "nav-pages_home-container" }
                            to="/"
                        >
                            <span className="nav-pages_home-text">Home</span>
                        </NavLink>
                        <NavLink
                            className={activeTab === 'New Question' ? "nav-pages_question-container-active" :"nav-pages_question-container"}
                            to='/add'
                        >
                            <span className="nav-pages_question-text">New Question</span>
                        </NavLink>
                        <NavLink
                            className={activeTab === "Leader Board"? "nav-pages_leader-container-active" : "nav-pages_leader-container"}
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

/**
 * @description Maps state from Redux store to component props
 * @function
 * @param login
 * @param activeTab
 * @returns {{isLoggedIn: *, user: string | null | number | PublicKeyCredentialUserEntity}}
 */
function mapStateToProps({login,activeTab}){
    return {
        user:login.user,
        isLoggedIn:login.state,
        activeTab
    }
}

/**
 * @description Connects component to the redux store and exports it
 */
export default connect(mapStateToProps)(NavBar)