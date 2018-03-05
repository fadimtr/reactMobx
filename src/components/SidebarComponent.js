import React, { Component } from 'react';
import Profile from './sidebar/profileComponent';
import MenuItems from './sidebar/menuItemsComponent';

import '../styles/sidebar.scss';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<div className='sidebar-component'>
                    <Profile translations={this.props.translations}/>
                    <MenuItems translations={this.props.translations}/>
                </div>)
    }
}
 
export default Sidebar;