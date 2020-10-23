import React,{Component} from 'react';
import {connect} from 'react-redux';

class LeaderBoardItem extends Component {

    render(){

        const {id,name,answered,created,total} = this.props.user

        return(
            <div className='leaderboard-list-item'>
                <div className='leaderboard-list-item_img-container'>
                    <img
                        className='leaderboard-list-item_img'
                        src={'./img/' + id + '.png'}
                        alt='avatar'
                    />
                </div>
                <div className='leaderboard-list-item_info-container'>
                    <span
                        className='leaderboard-list-item_info_name'
                    >{name}</span>
                    <div
                        className='leaderboard-list-item_info_answered-container'
                    >
                        <span
                            className='leaderboard-list-item_info_answered-title'
                        >Answered questions</span>
                        <span className='leaderboard-list-item_info_answered-total'
                        >{answered}</span>
                    </div>
                    <div
                        className='leaderboard-list-item_info_created-container'
                    >
                        <span
                            className='leaderboard-list-item_info_created-title'
                        >Created questions</span>
                        <span
                            className='leaderboard-list-item_info_created-total'
                        >{created}</span>
                    </div>
                </div>
                <div className='leaderboard-list-item_score-container-outer-outer'>
                    <div className='leaderboard-list-item_score-container-outer'>
                        <div className='leaderboard-list-item_score-container-inner'>
                            <div className='leaderboard-list-item_score-header-container'>
                                <p className='leaderboard-list-item_score-header-text'>Score</p>
                            </div>
                            <div className='leaderboard-list-item_score-body-container'>
                                <div className='leaderboard-list-item_score-body-circle'>
                                    <p className='leaderboard-list-item_score-body-text'>{total}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default connect()(LeaderBoardItem)