import React from 'react'
import { Switch, Route } from 'react-router-dom'
import App from './App'
import Header from './Header'
import Profile from './Profile'



const Main = () => (
  <div>
  <Header />
  <App />
  <Switch>
    <Route  path="/Profile" component={Profile} />
  </Switch>
  
 
  </div>
)

export default Main;
