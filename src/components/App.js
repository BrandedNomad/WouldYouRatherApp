import React, {Component} from 'react';
import {handleInitialData} from "../actions/shared";
import {connect} from "react-redux"

import Login from "./Login"
import NavBar from "./NavBar";


import '../styles/styles.scss';

class App extends Component {
    componentDidMount(){
        this.props.dispatch(handleInitialData())

    }



    render(){
    return (
        <div className="App">
            <NavBar/>
            <Login/>
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
