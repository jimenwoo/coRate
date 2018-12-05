import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Profile from './Profile';
import {Link } from 'react-router-dom';

import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

  import Note from './Note';
  import NoteForm from './NoteForm';
  import { DB_CONFIG } from './config';
  import firebase from 'firebase/app';
  import 'firebase/database';
  

class Rating extends Component{
  render() {
      return(
        <div className ="tunechi">
        <Card>
        <CardImg top width="25%" src="https://imgflip.com/s/meme/Bad-Luck-Brian.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Brian Luk</CardTitle>
          <CardSubtitle>President</CardSubtitle>
          <CardText>In search for better luck.</CardText>
          
          {/* <Link to="/Profile">
          <button > Rate Me! </button>
          </Link> */}

          
          
        </CardBody>
      </Card>

      
        </div>
      )
  }
}

export default Rating;
