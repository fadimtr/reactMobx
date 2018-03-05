import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';
import FullLayout from './components/FullLayoutComponent';

ReactDOM.render((
  <HashRouter>
    <Switch>
      <Route path="/" name="Home" component={FullLayout}/>
    </Switch>
  </HashRouter>
), document.getElementById('root'));
