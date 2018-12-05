import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './components/App';
import Callback from './callback/Callback';
import Auth from './auth/Auth';
import history from './history';
import Main from './components/Main'

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
    <Router history={history}>
      <div>
        <Route path="/" render={(props) => <Main auth={auth} {...props} />} />
        
        <Route path="/callback" render={(props) => {
          handleAuthentication(props);
          return <Callback {...props} />
        }} />
      </div>
    </Router>
  );
}