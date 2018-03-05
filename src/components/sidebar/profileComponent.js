import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className='menu-profile-info'>
                    <div className='profile-photo-container'>
                        <div className='profile-photo'/>
                    </div>
                    <div className='profile-name'>
                        <Link to='/profile'>{this.props.translations.HELLO} Fadi!</Link>
                        <div className='sign-out'>{this.props.translations.SIGN_OUT}</div>
                    </div>
                </div> )
    }
}
 
export default Profile;