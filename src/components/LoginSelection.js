import React,{Component} from 'react';
import {connect} from 'react-redux';

import {FiChevronDown} from "react-icons/all";

class LoginSelection extends Component {

    constructor(prop) {
        super(prop);

        this.state={
            selected:this.props.users.sarahedo,
            isActive:false
        }
        this.handleListClick = this.handleListClick.bind(this)
        this.handleItemClick = this.handleItemClick.bind(this)
        this.handleButtonClick = this.handleButtonClick.bind(this)
    }

    handleButtonClick(event){
        console.log("logging in ...", this.state.selected.id)
    }

    handleListClick(event){
        this.setState({
            isActive:!this.state.isActive
        })
    }

    handleItemClick(event){
        const id =  event.currentTarget.getAttribute('value')
        this.setState({
            selected:this.props.users[id],
            isActive:!this.state.isActive
        })
    }

    render(){

        const users = this.props.users;
        const userIds = Object.keys(users); //can access the first level keys


        return (
            <div>
                <div className="login-form">
                    <div className='login_selection_container' onClick={this.handleListClick}>
                        <img
                            className='login_selection_image'
                            alt={this.state.selected.id}
                            src={'./img/' + this.state.selected.id + '.png'}
                        />
                        <span className='login_selection_text'>{this.state.selected.name}</span>
                        <div className="login_selection_chevron_container">
                            <FiChevronDown className="login_selection_chevron"/>
                        </div>
                    </div>
                    {this.state.isActive && <div className="login_dropdown" >
                        <ul
                            className='login_dropdown_ul'
                        >
                            {userIds.map((id)=>{
                                return (
                                    <li
                                        className='login_dropdown_item'
                                        key={id}
                                        value={id}
                                        onClick={(event)=>{this.handleItemClick(event)}}
                                    >
                                        <img
                                            className='login_dropdown_item_image'
                                            alt={id}
                                            src={'./img/' + id + '.png'}
                                        />
                                        <span>{users[id].name}</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>}
                </div>
                <button
                    className='login-form_button'
                    onClick={this.handleButtonClick}
                >
                    LOGIN
                </button>
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

export default connect(mapStateToProps)(LoginSelection);