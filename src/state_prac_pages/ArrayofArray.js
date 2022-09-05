import React, { useState } from "react";
import Card from "../Card";
import "./hooks.css";

const ArrayofArray = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [index, setIndex] = useState("");
  const [data, setData] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if(!index==null){
      const newData = data.filter(i=>i.index===index);
      setData(newData);
      console.log(newData);
    }
    else{
    setData([...data, {name, password,index}]);
    }
    setName("");
    setPassword("");
  };
  const UpdateHandled=(id)=>{
    setName(data[id].name);
    setPassword(data[id].password);
    setIndex(id)
    // setData([...data,{id:id}])

  }
  // console.log(data)
  return (
    <div>
      <h1>Array of Array-Details</h1>
      <form role="form" className="custom-centered">
        <div className="form-group">
          <input
            type="text"
            name="Name"
            className="form-control"
            id="name"
            placeholder="Enter Name.."
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
          />
        </div>
        <br />
        <div className="form-group">
          <input
            type="password"
            name="Password"
            className="form-control"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
          />
        </div>
        <br />
        <button  className="btn btn-primary" onClick={submitHandler}>
          Login
        </button>
      </form>
      {data &&
        data.map((item,id) => <Card Name={item.name} Password={item.password} id={index} Data={data} handler={UpdateHandled} Id={id}/>)}
      <h1>{JSON.stringify(data)}</h1>
    </div>
  );
};

export default ArrayofArray;
