import React,{useContext} from 'react'
import {Card} from 'react-bootstrap'
import { CounterContext } from './Reducer';


const ReducerContext = () => {
    const value = useContext(CounterContext);
    return (
        <div>
            <Card border="dark" style={{ width: '18rem' }}>
    <Card.Header>{value}</Card.Header>
    <Card.Body>
      <Card.Title>HERO {value}</Card.Title>
    </Card.Body>
  </Card>
        </div>
    )
}

export default ReducerContext
