import React, { createContext, useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import { Button } from "react-bootstrap";

export const CounterContext = createContext(null);

const Context = () => {
  const [name, setName] = useState();
  const changeName=()=>{
      setName(name.toUpperCase());
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Your Name...."
        value={name}
        autoComplete="off"
        onChange={(e) => setName(e.target.value)}
      />
      <Button className="mb-2" style={{margin:"10px"}} variant="outline-primary" onClick={changeName}>Change</Button>
      <CounterContext.Provider value={{name,setName}}>
        <Child1 /><br/>
        <Child2 />
      </CounterContext.Provider>
    </div>
  );
};

export default Context;
