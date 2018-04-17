import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';


import Landing from '../containers/Landing/Landing';
import Login from '../containers/Auth/Login/Login';
import Register from '../containers/Auth/Register/Register';
import Home from '../containers/Home/Home';
import RequireAuth from '../components/require_auth';


const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/home" component={RequireAuth(Home)} />
      </Switch>
    </Router>
  );
}

export default Routes;