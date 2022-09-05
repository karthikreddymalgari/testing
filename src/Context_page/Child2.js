import React,{useContext} from 'react'
import {Card} from 'react-bootstrap'
import Context, { CounterContext } from './Context'

const Child2 = () => {
    const {name,setName} = useContext(CounterContext);
    return (
        <div>
            <Card border="dark" style={{ width: '18rem' }}>
    <Card.Header>{name}</Card.Header>
    <Card.Body>
      <Card.Title>HERO {name}</Card.Title>
    </Card.Body>
  </Card>
        </div>
    )
}

export default Child2
