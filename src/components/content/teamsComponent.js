import React, { Component } from 'react';
import TableComponent from '../common/tableComponent';
import { observer, PropTypes,inject } from 'mobx-react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Card,
  CardHeader,
  CardFooter,
  CardBody
} from 'reactstrap';

import '../../styles/mainContents/users.scss';
require('../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table.min.css');

@inject('store')
@observer 
class TeamsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab:0,
            activeTeams:[
                {name:'SAST',users:'fadi@workflow.com',status:'Admin'},
                {name:'OSA',users:'aws@print.com',status:'Admin'},
                {name:'Platform',users:'rasha@x.com',status:'Reviewer'},
                {name:'Application',users:'ashraf@y.com',status:'Reviewer'},
                {name:'HR',users:'adam@afa.com',status:'Reviewer'}
            ],
            inactiveTeams:[
                {name:'fadi matar inactive',users:'fadi@workflow.com',status:'Admin'},
                {name:'aws mansouasfar',users:'aws@print.com',status:'Admin'},
                {name:'r131asha',users:'rasha@x.com',status:'Reviewer'},
                {name:'a315r1shraf',users:'ashraf@y.com',status:'Reviewer'},
                {name:'a515dam',users:'adam@afa.com',status:'Reviewer'}
            ]
        }
    }

    componentWillMount() {
        this.props.store.getTeams();
    }

    render() {
        let activeTeamsClass = this.state.activeTab == 0 ? 'active' : '';
        let inactiveTeamsClass = this.state.activeTab == 1 ? 'active' : '';

        return ( <div className='users-info'>
                    <Card>
                        <CardHeader>
                            Teams
                        </CardHeader>
                        <CardBody>
                      
                            <div className='main-tabs'>
                                <span className={`main-tab ${activeTeamsClass}`} onClick={() => this.setState({activeTab:0})}>Active Teams</span>
                                <span className={`main-tab ${inactiveTeamsClass}`} onClick={() => this.setState({activeTab:1})}>Inactive Teams</span>
                            </div>
                            {
                                this.state.activeTab == 0 ? 
                                <div className='active-users-table-header'>
                                <TableComponent data={this.props.store.teams.slice()} 
                                                columns={[
                                                            {name:'name',title:'Name'},
                                                            {name:'users',title:'Users'},
                                                            {name:'status',title:'Status'}
                                                        ]}/>
                            </div> :
                            <div className='inactive-users-table-header'>
                                <TableComponent data={this.state.inactiveTeams} 
                                                columns={[
                                                            {name:'name',title:'Name'},
                                                            {name:'users',title:'Users'},
                                                            {name:'status',title:'Status'}
                                                        ]}/>
                            </div>
                            }
                            <div className='add-button' onClick={() => this.props.store.addTeam({name:'Mobx',users:'mobx@y.com',status:'Reviewer'})}> New Team </div>
                        </CardBody>
                    </Card>
                </div> )
    }
}
 
export default TeamsComponent;