import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Card,
  CardHeader,
  CardFooter,
  CardBody
} from 'reactstrap';

import '../../styles/mainContents/users.scss';
require('../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table.min.css');

class ProductSettings extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            activeProducts:[
                {id:1,name:'fadi matar',flow:'fadi@workflow.com',status:'Admin'},
                {id:2,name:'aws mansour',flow:'aws@print.com',status:'Admin'},
                {id:3,name:'rasha',flow:'rasha@x.com',status:'Reviewer'},
                {id:4,name:'ashraf',flow:'ashraf@y.com',status:'Reviewer'},
                {id:5,name:'adam',flow:'adam@afa.com',status:'Reviewer'}
            ],
            inactiveProducts:[
                {id:6,name:'fadi matar',flow:'fadi@workflow.com',status:'Admin'},
                {id:7,name:'aws mansour',flow:'aws@print.com',status:'Admin'},
                {id:8,name:'rasha',flow:'rasha@x.com',status:'Reviewer'},
                {id:9,name:'ashraf',flow:'ashraf@y.com',status:'Reviewer'},
                {id:10,name:'adam',flow:'adam@afa.com',status:'Reviewer'}
            ]
        }
    }
    render() { 

        let viewMode = this.state.disabled;
        let userInfo = this.state.userInfo;

        return ( <div className='users-info'>
                    <Card>
                        <CardHeader>
                            Products
                        </CardHeader>
                        <CardBody>
                            <div className='add-user'>
                                +Add Product
                            </div>
                            <div className='active-users-table-header'>
                                <div className='users-table-header table-main-header'>Active Products</div>
                                <BootstrapTable data={this.state.activeProducts}>
                                    <TableHeaderColumn isKey dataField='id' >Id</TableHeaderColumn>
                                    <TableHeaderColumn dataField='name' >Name</TableHeaderColumn>
                                    <TableHeaderColumn dataField='flow'>Flow</TableHeaderColumn>
                                    <TableHeaderColumn dataField='status'>Status</TableHeaderColumn>
                                </BootstrapTable>
                            </div>
                            <div className='inactive-users-table-header'>
                                <div className='users-table-header table-main-header'>Inactive Products</div>
                                <BootstrapTable data={this.state.inactiveProducts}>
                                    <TableHeaderColumn isKey dataField='id' >Id</TableHeaderColumn>                                
                                    <TableHeaderColumn dataField='name' >Name</TableHeaderColumn>
                                    <TableHeaderColumn dataField='flow'>Flow</TableHeaderColumn>
                                    <TableHeaderColumn dataField='status'>Status</TableHeaderColumn>
                                </BootstrapTable>
                            </div>
                        </CardBody>
                    </Card>
                </div> )
    }
}
 
export default ProductSettings;