import React, { Component } from 'react';
import '../css/App.css';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import Header from './Header';
import Rating from './Rating';
import Main from './Main';
import {Link } from 'react-router-dom';

import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

  import Note from './Note';
  import NoteForm from './NoteForm';
  import { DB_CONFIG } from './config';
  import 'firebase/database';



class App extends Component {


constructor(props){
  super(props);
  this.addNote = this.addNote.bind(this);
  

  this.app = firebase.initializeApp(DB_CONFIG);
  this.database = this.app.database().ref().child('comment');

  
  this.state = {
    notes: [],
  }
}
componentWillMount(){
  const previousNotes = this.state.notes;

  
  this.database.on('child_added', snap => {
    previousNotes.push({
      id: snap.key,
      noteContent: snap.val().noteContent,
    })

    this.setState({
      notes: previousNotes
    })
  })

  
}

addNote(note){
  this.database.push().set({ noteContent: note});
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
  login() {
    this.props.auth.login();
  }
  render() {
    
    const { isAuthenticated } = this.props.auth;
    return (
      <div className = "App">
        {

          isAuthenticated() && (
            <div>
            <h4>
              You are logged in!
              
              </h4>
              
              <Card>
              <CardImg top width="25%" src="https://www.lifewire.com/thmb/L-aLC8zjGWcu-ROZWlsbm0icK0Y=/1600x900/filters:no_upscale():fill(FFCC00,1)/Aliens-5ad4ee9231283400363d13c4.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle>John Smith</CardTitle>
                <CardSubtitle>Extraterrestrial Scientist</CardSubtitle>
                <CardText>Astronomy Department</CardText>
                
                {/* <Link to="/Profile">
                <button > Rate Me! </button>
                </Link> */}
      
                <div className="notesWrapper">
              <div className="notesHeader">
              </div>
              <div className="notesBody">
                {
                  this.state.notes.map((note) => {
                    return (
                      <Note noteContent={note.noteContent} 
                      noteId={note.id} 
                      key={note.id} 
                      />
                    )
                  })
                }
              </div>
              <div className="notesFooter">
                <NoteForm addNote={this.addNote} />
              </div>
            </div>
                
              </CardBody>
            </Card>
            </div>
          )
        }
        {
          !isAuthenticated() && (
            <h4>
              You are not logged in! Please{' '}
              <a
                style={{ cursor: 'pointer' }}
                onClick={this.login.bind(this)}
              >
                Log In
                </a>
              {' '}to continue.
              </h4>
          )
        }
      </div>
    );
  }
}

export default App;
