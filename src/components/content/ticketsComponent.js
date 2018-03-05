import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Card,
  CardHeader,
  CardFooter,
  CardBody
} from 'reactstrap';

import '../../styles/mainContents/activity.scss';
require('../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table.min.css');

class Tickets extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            tickets:[
                {date:new Date().toDateString() + ' ' + new Date().toLocaleTimeString(),username:'fadi',client:'upload',ticketNumber:51501,ticketTitle:'design logo'},
                {date:new Date().toDateString() + ' ' + new Date().toLocaleTimeString(),username:'aws',client:'download',ticketNumber:59746,ticketTitle:'cards printing'},
                {date:new Date().toDateString() + ' ' + new Date().toLocaleTimeString(),username:'rasha',client:'comment',ticketNumber:94613,ticketTitle:'graphic work'},
                {date:new Date().toDateString() + ' ' + new Date().toLocaleTimeString(),username:'ashraf',client:'status change',ticketNumber:13642,ticketTitle:'New Canvas'},
                {date:new Date().toDateString() + ' ' + new Date().toLocaleTimeString(),username:'adam',client:'request',ticketNumber:51516,ticketTitle:'Printing files'}
            ]
        }
    }
    render() { 
        return ( <div className='profile-settings'>
                    <Card>
                        <CardHeader>
                            Activity
                        </CardHeader>
                        <CardBody>
                        <BootstrapTable data={this.state.tickets}>
                            <TableHeaderColumn isKey dataField='ticketNumber' >Ticket Number</TableHeaderColumn>
                            <TableHeaderColumn dataField='ticketTitle'>Ticket Title</TableHeaderColumn>
                            <TableHeaderColumn dataField='username'>User Name</TableHeaderColumn>
                            <TableHeaderColumn dataField='date'>Date</TableHeaderColumn>
                            <TableHeaderColumn dataField='client'>Client</TableHeaderColumn>
                        </BootstrapTable>
                        </CardBody>
                    </Card>
                </div> )
    }
}
 
export default Tickets;