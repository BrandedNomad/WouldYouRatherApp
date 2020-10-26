import React, {Component} from 'react';
import {connect} from 'react-redux';
import LeaderBoardItem from "./LeaderBoardItem";
import {Redirect} from "react-router-dom";

/**
 * @description Represents the Leader board that displays leaders
 * @class
 */
class LeaderBoard extends Component {


    /**
     * @description Renders the component
     * @method
     * @returns {JSX.Element}
     */
    render(){

        //todo: refactor code into smaller functions

        //get the logged in user
        const currentUser = this.props.currentUser

        //check if user is logged in, if not then direct to login page
        if(currentUser === undefined || currentUser === null){
            return <Redirect to={'/login'}/>
        }

        //turn Users Object into an array
        const usersEntries = Object.entries(this.props.users)
        const usersArray = usersEntries.map((user)=>{
            return user[1]
        })

        //reformat user objects in array into usable object
        const listArray = usersArray.map((user)=>{

            let answers = Object.keys(user.answers)
            let answeredQuestions = answers.length

            return {
                id:user.id,
                name:user.name,
                answered:answeredQuestions,
                created:user.questions.length,
                total: answeredQuestions + user.questions.length
            }

        })

        //Order array so that the leader is displayed at the top of leaderboard
        listArray.sort((a,b)=>{
            return b.total - a.total
        })


        return(
            <div className='leaderboard-page'>
                <div className='leaderboard-list-container'>
                    <ul className='leaderboard-list'>
                        {
                            listArray.map((user)=>{
                                return <LeaderBoardItem key={user.id} user={user}/>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

/**
 * @description Maps state from redux store to the component's props
 * @function
 * @param users
 * @param login
 * @returns {{currentUser: string | null | number | PublicKeyCredentialUserEntity, users: *}}
 */
function mapStateToProps({users,login}){
    return {
        users,
        currentUser:login.user
    }
}

/**
 * @description Connects Redux store to component
 */
export default connect(mapStateToProps)(LeaderBoard)