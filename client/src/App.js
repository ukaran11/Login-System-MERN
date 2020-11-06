import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard'; 
import { loadUser } from './action/auth';
import { setToken } from './setToken';

if(localStorage.getItem('token')){
  setToken(localStorage.getItem('token'));
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
  }, [])
  return (
   <Provider store={store}>
     <Router>
       <Switch>
         <Route exact path="/register" component={Register} />
         <Route exact path="/" component={Dashboard} />
         <Route exact path="/login" component={Login} />
       </Switch>
     </Router>
   </Provider> 
  )
}


export default App