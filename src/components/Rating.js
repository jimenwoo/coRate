import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import testing from './testing';

import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
  

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
          <Button onClick={() => <testing/>} >Rate me!</Button>
          <testing/>
        </CardBody>
      </Card>

      <Card>
        <CardImg top width="25%" src="http://www.radioacktiva.com/wp-content/uploads/2018/02/pp550x550.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>

      <Card>
        <CardImg top width="25%" src="https://i.kym-cdn.com/entries/icons/mobile/000/005/848/Aliens.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>

      <Card>
        <CardImg top width="25%" src="https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?width=700&crop=2:1" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
        </div>
      )
  }
}

export default Rating;
