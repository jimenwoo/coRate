import React, { Component } from 'react';
import '../css/App.css';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import Header from './Header';

firebase.initializeApp({
  apiKey: "AIzaSyAb3DecniPkMErcRr2GebYvigm_giFi7YE",
  authDomain: "corate-4b30a.firebaseapp.com"
})

class App extends Component {
  state = {
   isSignedIn: false
 }
  uiConfig = {
  signInFlow: "popup",
  signInOptions: [
     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
     firebase.auth.GithubAuthProvider.PROVIDER_ID,
     firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signinSucess: () => false
  }
  }

  componentDidMount = ()=>{
    firebase.auth().onAuthStateChanged(user =>{
      this.setState({isSignedIn:!!user})
    })
  }
  render() {
    return (
      <div className = "App">
      {this.state.isSignedIn ? (
        <span>
          <div> Signed In! </div>
          <button onClick={() => firebase.auth().signOut()}> Sign out! </button>
          <h1> Welcome {firebase.auth().currentUser.displayName}</h1>
          <img alt = "profile picture" src={firebase.auth().currentUser.photoURL}/>
        </span>
      ) : (
        <div authButtons>
        <StyledFirebaseAuth
          uiConfig={this.uiConfig}
          firebaseAuth={firebase.auth()}
          />
          </div>
      )}
      </div>
    );
  }
}

export default App;
