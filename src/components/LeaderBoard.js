import React, {Component} from 'react';
import {connect} from 'react-redux';
import LeaderBoardItem from "./LeaderBoardItem";
import {Redirect} from "react-router-dom";

class LeaderBoard extends Component {


    render(){

        //todo: refactor code into functions
        const currentUser = this.props.currentUser
        if(currentUser === undefined || currentUser === null){
            return <Redirect to={'/login'}/>
        }



        const usersEntries = Object.entries(this.props.users)
        const usersArray = usersEntries.map((user)=>{
            return user[1]
        })


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

        listArray.sort((a,b)=>{
            return b.total - a.total
        })

        console.log(" sorted list array", listArray)

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

function mapStateToProps({users,login}){
    return {
        users,
        currentUser:login.user
    }
}

export default connect(mapStateToProps)(LeaderBoard)