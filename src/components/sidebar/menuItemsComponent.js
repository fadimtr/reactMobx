import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MenuItems extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 

        let { translations } = this.props;
        return ( 
                <div>
                    <div className='new-order'><Link to='/order'>{translations.NEW_ORDER}</Link></div>
                    <ul className='menu-items-on-sidebar'>
                        <li><Link to='/dashboard'>{translations.DASHBOARD}</Link></li>
                        <li><Link to='/activity'>{translations.ACTIVITY}</Link></li>
                        <li><Link to='/users'>{translations.USERS}</Link></li>
                        <li><Link to='/teams'>{translations.TEAMS}</Link></li>
                        <li><Link to='/productSettings'>{translations.PRODUCT_SETTINGS}</Link></li>
                        <li><Link to='/bookkeeping'>{translations.BOOKKEEPING}!</Link></li>
                        <li><Link to='/billing'>{translations.BILLING}</Link></li>
                        <li><Link to='/tickets'>{translations.TICKETS}</Link></li>
                        <li><Link to='/clients'>{translations.CLIENTS}</Link></li>
                        <li><Link to='/statistics'>{translations.STATISTICS}</Link></li>       
                    </ul>
                </div> )
    }
}
 
export default MenuItems;