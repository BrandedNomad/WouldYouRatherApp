import React, {Component} from 'react';
import {connect} from 'react-redux';
import LoginSelection from "./LoginSelection";

class Login extends Component {


    render() {
        return (
            <div>
                {this.props.users.sarahedo && <LoginSelection/>}
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