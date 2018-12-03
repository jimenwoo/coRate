import React, { Component } from 'react';
import '../css/App.css';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import Header from './Header';
import Rating from './Rating';
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
        <div class = "content">
          <h1 class = "greeting"> Welcome {firebase.auth().currentUser.displayName}</h1>
          <button onClick={() => firebase.auth().signOut()}> Sign out! </button>
          <Rating/>
        </div>
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
