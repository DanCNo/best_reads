import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignUpContainer from './session_form/signup_form_container';


const App = () => (
  <div>
    <header>
      <h1>BestReads</h1>
      <GreetingContainer />
    </header>

    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignUpContainer} />
  </div>
);

export default App;