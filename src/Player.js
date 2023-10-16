import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Player = ({name, team, nationality, jerseyNumber, age, imageURL}) => {
  return (
    <>
    <div  >
      
 <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={imageURL} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
      Team: {team}<br />
          Nationality: {nationality}<br />
          Jersey Number: {jerseyNumber}<br />
          Age: {age}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  </div>
  </>
  )
}
Player.defaultProps = {
    name: 'Unknown',
    team: 'Unknown',
    nationality: 'Unknown',
    jerseyNumber: 0,
    age: 0,
    imageURL: 'https://example.com/unknown.jpg',
  };
export default Player