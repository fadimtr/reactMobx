import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProfileInfo from './content/profileInfoComponent';
import ActivityInfo from './content/activityComponent';
import UsersComponent from './content/usersComponent';
import TeamsComponent from './content/teamsComponent';
import ProductSettings from './content/productComponent';
import BillingPlans from './content/billingPlansComponent';
import Tickets from './content/ticketsComponent';

import '../styles/mainContent.scss';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<div className='content-component'>
                    <Switch>
                        <Route path="/profile" name="Profile" component={ProfileInfo}/>
                        <Route path="/activity" name="Activity" component={ActivityInfo}/>
                        <Route path="/users" name="Users" component={UsersComponent}/>
                        <Route path="/teams" name="Teams" component={TeamsComponent}/>
                        <Route path="/productSettings" name="ProductSettings" component={ProductSettings}/>
                        <Route path="/billing" name="Billing" component={BillingPlans}/>
                        <Route path="/tickets" name="Tickets" component={Tickets}/>                        
                    </Switch>
                </div>)
    }
}
 
export default Content;