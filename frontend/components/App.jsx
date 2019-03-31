import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import HomePageContainer from './home_page/home_page_container';
import StartPage from './start_page/start_page';
import LoginPage from './session_form/login_page';
import SignupPage from './session_form/signup_page';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignupPageContainer from './session_form/signup_page_container';
import LoginPageContainer from './session_form/login_page_container';
import BookShowContainer from './books/book_show_container';


const App = () => (
  <>
    <Switch >
      <ProtectedRoute exact path="/home" component={HomePageContainer} />
      <Route exact path="/books/:bookId" component={BookShowContainer}/>
      <AuthRoute path="/login" component={LoginPage} />
      <AuthRoute path="/signup" component={SignupPage}/>
      <AuthRoute exact path="/" component={StartPage} />
    </Switch>
  </>
);

export default App;