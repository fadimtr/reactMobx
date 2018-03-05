import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Card,
  CardHeader,
  CardFooter,
  CardBody
} from 'reactstrap';

import '../../styles/mainContents/users.scss';
require('../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table.min.css');

class UsersComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            activeUsers:[
                {fullName:'fadi matar',email:'fadi@workflow.com',role:'Admin'},
                {fullName:'aws mansour',email:'aws@print.com',role:'Admin'},
                {fullName:'rasha',email:'rasha@x.com',role:'Reviewer'},
                {fullName:'ashraf',email:'ashraf@y.com',role:'Reviewer'},
                {fullName:'adam',email:'adam@afa.com',role:'Reviewer'}
            ],
            inactiveUsers:[
                {fullName:'fadi abc',email:'fadi2@workflow.com',role:'Admin'},
                {fullName:'aws def',email:'aws2@print.com',role:'Admin'},
                {fullName:'rasha abc',email:'rasha2@x.com',role:'Reviewer'},
                {fullName:'ashraf def',email:'ashraf2@y.com',role:'Reviewer'},
                {fullName:'adam abd',email:'adam2@afa.com',role:'Reviewer'}
            ]
        }
    }
    render() { 

        let viewMode = this.state.disabled;
        let userInfo = this.state.userInfo;

        return ( <div className='users-info'>
                    <Card>
                        <CardHeader>
                            Users
                        </CardHeader>
                        <CardBody>
                            <div className='add-user'>
                                +Add User
                            </div>
                            <div className='active-users-table-header'>
                                <div className='users-table-header table-main-header'>Active Users</div>
                                <BootstrapTable data={this.state.activeUsers}>
                                    <TableHeaderColumn isKey dataField='fullName' >Full Name</TableHeaderColumn>
                                    <TableHeaderColumn dataField='email'>Email</TableHeaderColumn>
                                    <TableHeaderColumn dataField='role'>Role</TableHeaderColumn>
                                </BootstrapTable>
                            </div>
                            <div className='inactive-users-table-header'>
                                <div className='users-table-header table-main-header'>Inactive Users</div>
                                <BootstrapTable data={this.state.inactiveUsers}>
                                    <TableHeaderColumn isKey dataField='fullName' >Full Name</TableHeaderColumn>
                                    <TableHeaderColumn dataField='email'>Email</TableHeaderColumn>
                                    <TableHeaderColumn dataField='role'>Role</TableHeaderColumn>
                                </BootstrapTable>
                            </div>
                        </CardBody>
                    </Card>
                </div> )
    }
}
 
export default UsersComponent;