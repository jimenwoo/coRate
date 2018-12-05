import React from 'react'
import { Switch, Route } from 'react-router-dom'
import App from './App'
import Header from './Header'
import Profile from './Profile'


class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <App auth={this.props.auth}/>
      </div>
    )
  }
}

 export default Main;
// const Main = () => (
//   <div>
//   <Header />
//   <App />
//   <Switch>
//     <Route  path="/Profile" component={Profile} />
//   </Switch>
  
 
//   </div>
// )

// export default Main;
