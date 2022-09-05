import React, { useState } from "react";
import "./hooks.css";

const ObjectHooks = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setData({...data,[name]:password})
    setName("");
    setPassword("");
  }

  return (
      <div >
        <h1>List of Objects</h1>
        <form role="form" className="custom-centered" onSubmit={submitHandler}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Name.."
              value={name}
              onChange={(e)=>setName(e.target.value)}
              autoComplete="off"
            />
          </div><br/>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              autoComplete="off"
            />
          </div>
        <br/>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
        <h1>{JSON.stringify(data)}</h1>
      </div>
  );
};

export default ObjectHooks;
