import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import HomePageContainer from './home_page/home_page_container'
import StartPage from './start_page/start_page';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <>
    <div>
      <header>
        {/* < StartPage /> */}
      </header>
    </div>

    <Switch >
      <ProtectedRoute exact path="/home" component={HomePageContainer} />
      < StartPage />
      {/* <AuthRoute exact path="/" component={StartPage} /> */}
    </Switch>
  </>
);

export default App;