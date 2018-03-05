import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

require('../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table.min.css');
import '../../styles/common.scss';

class TableComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div className='common-table-container'>
                    <BootstrapTable data={this.props.data}>
                    {
                        this.props.columns.map((column,index) => 
                                                              <TableHeaderColumn key={index} isKey={column == this.props.columns[0]} dataField={column.name} >{column.title}</TableHeaderColumn>)
                    }
                    </BootstrapTable>
                </div>)
    }
}
 
export default TableComponent;