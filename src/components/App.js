import React, {Component} from 'react';
import {handleInitialData} from "../actions/shared";
import {connect} from "react-redux"
import {BrowserRouter,Route} from "react-router-dom";


import Login from "./Login"
import NavBar from "./NavBar";
import NewQuestion from "./NewQuestion"
import Home from "./Home";
import LeaderBoard from "./LeaderBoard";



import '../styles/styles.scss';

class App extends Component {
    componentDidMount(){
        this.props.dispatch(handleInitialData())

    }



    render(){
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar/>
                <div>
                    <Route path='/' exact component={Home}/>
                    <Route path='/login' exact component={Login}/>
                    <Route path='/add' exact component={NewQuestion}/>
                    <Route path='/leaderboard' exact component={LeaderBoard}/>
                </div>
            </div>
        </BrowserRouter>

    );
  }

}

const mapStateToProps=({users})=>{
    return {
        users
    }
}

export default connect(mapStateToProps)(App);
