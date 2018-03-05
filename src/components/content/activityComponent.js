import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Card,
  CardHeader,
  CardFooter,
  CardBody
} from 'reactstrap';

import '../../styles/mainContents/activity.scss';
require('../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table.min.css');

class ActivityInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            activity:[
                {date:new Date().toDateString() + ' ' + new Date().toLocaleTimeString(),username:'fadi',action:'upload',ticketNumber:51501,ticketTitle:'design logo'},
                {date:new Date().toDateString() + ' ' + new Date().toLocaleTimeString(),username:'aws',action:'download',ticketNumber:59746,ticketTitle:'cards printing'},
                {date:new Date().toDateString() + ' ' + new Date().toLocaleTimeString(),username:'rasha',action:'comment',ticketNumber:94613,ticketTitle:'graphic work'},
                {date:new Date().toDateString() + ' ' + new Date().toLocaleTimeString(),username:'ashraf',action:'status change',ticketNumber:13642,ticketTitle:'New Canvas'},
                {date:new Date().toDateString() + ' ' + new Date().toLocaleTimeString(),username:'adam',action:'request',ticketNumber:51516,ticketTitle:'Printing files'}
            ]
        }
    }
    render() { 

        let viewMode = this.state.disabled;
        let userInfo = this.state.userInfo;

        return ( <div className='profile-settings'>
                    <Card>
                        <CardHeader>
                            Activity
                        </CardHeader>
                        <CardBody>
                        <BootstrapTable data={this.state.activity}>
                            <TableHeaderColumn isKey dataField='date' >Date</TableHeaderColumn>
                            <TableHeaderColumn dataField='username'>User Name</TableHeaderColumn>
                            <TableHeaderColumn dataField='ticketNumber'>Ticket #</TableHeaderColumn>
                            <TableHeaderColumn dataField='ticketTitle'>Ticket Title</TableHeaderColumn>
                            <TableHeaderColumn dataField='action'>Action</TableHeaderColumn>
                        </BootstrapTable>
                        </CardBody>
                    </Card>
                </div> )
    }
}
 
export default ActivityInfo;