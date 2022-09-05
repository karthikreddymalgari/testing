import React from 'react'
import Props from './Props'

const Card = (props) => {
    // console.log(props)
    const updateHandler = (id) => {
        props.handler(id)
    };
  return (
    <div style={{width:"200px", height:"100px",border: "1px solid"}}>
        <center>
        <li>{props.Name}</li>
        <li>{props.Password}</li>
        <button className="btn btn-primary" onClick={()=>updateHandler(props.Id)}>Update</button>
        </center>
    </div>)
}

export default Card