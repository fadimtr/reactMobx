import React, { Component } from 'react';

import '../../styles/mainContents/common.scss';

class ActiveInactiveTabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab:0
        }
    }

    render() {
        let activeTeamsClass = this.state.activeTab == 0 ? 'active' : '';
        let inactiveTeamsClass = this.state.activeTab == 1 ? 'active' : '';

        return (          
             <div>
                 <div className='main-tabs'>
                    <span className={`main-tab ${activeTeamsClass}`} onClick={() => this.setState({activeTab:0})}>ACTIVE</span>
                    <span className={`main-tab ${inactiveTeamsClass}`} onClick={() => this.setState({activeTab:1})}>INACTIVE</span>
                </div>
                {
                    this.state.activeTab == 0 ? this.props.activeContent : this.props.inactiveContent
                }
            </div>)
    }
}
 
export default ActiveInactiveTabs;