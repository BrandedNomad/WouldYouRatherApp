import React, {Component} from 'react';
import {handleInitialData} from "../actions/shared";
import {connect} from "react-redux"

import Login from "./Login"
import NavBar from "./NavBar";
import PollCardHome from "./PollCardHome"
import Home from "./Home";


import '../styles/styles.scss';

class App extends Component {
    componentDidMount(){
        this.props.dispatch(handleInitialData())

    }



    render(){
    return (
        <div className="App">
            <NavBar/>
            <Home/>
        </div>
    );
  }

}

const mapStateToProps=({users})=>{
    return {
        users
    }
}

export default connect(mapStateToProps)(App);
