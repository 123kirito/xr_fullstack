import * as React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import LoginContainer from './pages/LoginContainer';
import PageB from './pages/PageB';
import {SessionProvider} from './common';

const App = () => (
  <HashRouter>
    <Switch>
      <Route exact={true} path="/" component={LoginContainer}/>
      <Route path="/pageB" component={PageB}/>
    </Switch>
  </HashRouter>
)
export default App;