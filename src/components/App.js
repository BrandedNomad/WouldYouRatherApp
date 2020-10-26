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

/**
 * @description Represents the App component
 * @class
 *
 */
class App extends Component {

    /**
     * @description Loads the initial data from API into redux store
     * @method
     */
    componentDidMount(){
        this.props.dispatch(handleInitialData())
    }


    /**
     * @description Renders the Component
     * @method
     */
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

/**
 * @description Maps the state from redux store to component props
 * @function
 * @param users
 * @returns {{users: *}}
 */
const mapStateToProps=({users})=>{
    return {
        users
    }
}

/**
 * @description Connects component to redux store and exports it
 */
export default connect(mapStateToProps)(App);
