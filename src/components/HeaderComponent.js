import React, { Component } from 'react';

import '../styles/header.scss';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<div className='header-component'>
                    <span onClick={() => this.props.changeLayout('right')}>العربية</span>
                    <span onClick={() => this.props.changeLayout('left')}>      English</span>
                </div>)
    }
}
 
export default Header;