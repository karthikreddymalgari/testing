import React,{useState} from 'react'
import {Button} from 'react-bootstrap'

const Counter = () => {
    const [count,setCount] = useState(0)
    return (
        <div style={{margin: '0 auto'}}>
            {count}<br/>
            <Button variant="outline-info" style={{marginRight:"10px"}} onClick={()=>setCount(prevState=>prevState+1)}>Increment</Button>
            <Button variant="outline-info" onClick={()=>setCount(prevState=>prevState-1)}>Decrement</Button>
        </div>
    )
}

export default Counter
