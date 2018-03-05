import React, { Component } from 'react';
import { Card,
  CardHeader,
  CardFooter,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Col
} from 'reactstrap';

import '../../styles/mainContents/profile.scss';

class ProfileInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            disabled:true,
            userInfo: {
                companyName:'Workflo',
                companyId:'1512515',
                fullName:'Fadi Matar',
                roles:['Admin','Reviewer','Custom'],
                phone:'054-40301511',
                email:'fadimtr@gmail.com',
                employeeNumber:'135135'
            }
        }
    }
    render() { 

        let viewMode = this.state.disabled;
        let userInfo = this.state.userInfo;

        return ( <div className='profile-settings'>
                    <Card>
                        <CardHeader>
                            Profile Settings
                        </CardHeader>
                        <CardBody>
                            <Form className='profile-form'>
                            <div className='form-part'>
                                <FormGroup>
                                    <Label>Company Name</Label>
                                    <Input type="text" id="company-name" placeholder="Workflow" value={userInfo.companyName} disabled={viewMode}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Company Id</Label>
                                    <Input type="text" id="company-id" placeholder="Company Id" value={userInfo.companyId} disabled={viewMode}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Full Name</Label>
                                    <Input type="text" id="fullname" placeholder="Full Name" value={userInfo.fullName} disabled={viewMode}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Role</Label>
                                    <Input type="select" id="Role" placeholder="Role" disabled={viewMode}>
                                        { userInfo.roles.map(role => <option className='option'>{role}</option>)}
                                    </Input>
                                </FormGroup>
                                </div>
                                <div className='form-part'>
                                <FormGroup>
                                    <Label>Phone Number</Label>
                                    <Input type="text" id="phone-number" placeholder="Phone Number" value={userInfo.phone} disabled={viewMode}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Email</Label>
                                    <Input type="text" id="email" placeholder="Email" value={userInfo.email} disabled={viewMode}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Employee Number</Label>
                                    <Input type="text" id="employee-number" placeholder="Employee Number" value={userInfo.employeeNumber} disabled={viewMode}/>
                                </FormGroup>
                                </div>
                                <FormGroup>
                                    <div className='edit-button' onClick={() => this.setState({disabled: !this.state.disabled})}>edit</div>
                                </FormGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </div> )
    }
}
 
export default ProfileInfo;