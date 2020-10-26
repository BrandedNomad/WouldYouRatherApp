import React, {Component} from 'react';
import {handleInitialData} from "../actions/shared";
import {connect} from "react-redux"
import {BrowserRouter,Route, Switch} from "react-router-dom";


import Login from "./Login"
import NavBar from "./NavBar";
import NewQuestion from "./NewQuestion"
import Home from "./Home";
import LeaderBoard from "./LeaderBoard";
import PollCardQuestion from './PollCardQuestion'
import PollCardResults from "./PollCardResults";
import Error from "./Error";



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
                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/login' exact component={Login}/>
                        <Route path='/add' exact component={NewQuestion}/>
                        <Route path='/leaderboard' exact component={LeaderBoard}/>
                        <Route path='/questions/:question_Id' exact component={PollCardQuestion}/>
                        <Route path ='/results/:resultsId' exact component={PollCardResults}/>
                        <Route component={Error}/>
                    </Switch>

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
