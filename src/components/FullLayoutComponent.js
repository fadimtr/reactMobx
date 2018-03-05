import React, { Component } from 'react';
import Sidebar from './SidebarComponent';
import Header from './HeaderComponent';
import Content from './ContentComponent';
import * as ar from '../translations/resources-ar.json';
import * as en from '../translations/resources-en.json';
import '../styles/layout.scss';
import store from '../stores/teamsStore';
import { Provider } from 'mobx-react';

class FullLayout extends Component {
    constructor(props) {
        super(props);
        this.state = { layoutSide:'left' }
    }

    changeLayout(layoutSide){
        this.setState({
            layoutSide
        })
    }

    getTranslations(){
        if(this.state.layoutSide == 'right'){
            return ar;
        }
        return en;
    }

    render() { 
        return <Provider store={store}>
                    <div className={`main-layout-container ${this.state.layoutSide}`}>
                        <Sidebar translations={this.getTranslations()}/>
                        <div className='right-side'>
                            <Header changeLayout={this.changeLayout.bind(this)}/>
                            <Content translations={this.getTranslations()}/>
                        </div>
                    </div>
                </Provider>
    }
}

export default FullLayout;