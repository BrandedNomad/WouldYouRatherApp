import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from 'react-router-dom'


/**
 * @description Represents the 404 page
 * @class
 */
class Error extends Component {

    /**
     * @description Renders the component
     * @method
     * @returns {JSX.Element}
     */
    render(){
        return(
            <div className="error-page">
                <div className='error-center'>
                    <div className='error-content-container'>
                        <p className='error-content_title'>Wrong Turn!</p>
                        <p className='error-content_body'>The resource you are looking for does not exist</p>
                        <Link to='/' className='error-content_link'>Go back </Link>
                    </div>
                    <div className="error-img-container">
                        <img
                            className='error-img'
                            src='./img/404.jpg'
                            onError={(e)=>{e.target.onerror = null; e.target.src="../img/404.jpg"}}
                            alt='404'
                        />
                    </div>
                </div>

            </div>
        )
    }
}

/**
 * @description Connects component to redux store and exports it
 */
export default connect()(Error)