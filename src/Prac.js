import React,{useState,useEffect} from 'react'
import {Button} from 'react-bootstrap'

const Prac = () => {
    const [count,setCount] = useState(0)
    const [count1,setCount1] = useState(2)
    useEffect(() =>{
        console.log("component is rendered")
    },[count1])
    return (
        <div>
        <div style={{margin: '0 auto'}}>
            {count}<br/>
            <Button variant="outline-info" style={{marginRight:"10px"}} onClick={()=>setCount(prevState=>prevState+1)}>Increment</Button>
            <Button variant="outline-info" onClick={()=>setCount(prevState=>prevState-1)}>Decrement</Button>
        </div>
        <div style={{margin: '0 auto'}}>
            {count1}<br/>
            <Button variant="outline-info" style={{marginRight:"10px"}} onClick={()=>setCount1(prevState=>prevState+1)}>Increment</Button>
            <Button variant="outline-info" onClick={()=>setCount1(prevState=>prevState-1)}>Decrement</Button>
        </div>
        </div>
    )
}

export default Prac
