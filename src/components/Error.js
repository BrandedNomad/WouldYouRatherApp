import React, {Component} from "react";
import {connect} from "react-redux";



class Error extends Component {
    render(){
        return(
            <div>
                <h1>404 Page Not Found</h1>
                <img src='./img/404.jpg' alt='404'/>
            </div>
        )

    }
}

export default connect()(Error)