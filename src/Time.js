import React, { useState, useRef } from "react";

const Time = (props) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [input, setInput] = useState("");
  const inputRef = useRef();

  const fromHandler = (e) => {
    setFrom(e.target.value);
  };

  const searchHandler = () => {
    setInput(inputRef.current.value);
  };

  const InputChange = (e) => {
    setInput(e.target.value);
  };
  const toHandler = (e) => {
    new Date(e.target.value).getMonth();
    new Date(from).getMonth();
    if (
      new Date(from).getFullYear() == new Date(e.target.value).getFullYear()
    ) {
      if (new Date(e.target.value).getMonth() >= new Date(from).getMonth()) {
        setTo(e.target.value);
      } else {
        return null;
      }
    } else {
      var x = 12;
      if (
        new Date(e.target.value).getMonth() + x <=
        new Date(from).getMonth() + 15
      ) {
        setTo(e.target.value);
      } else {
        console.log("Enter within 15months");
        setTo("");
      }
    }
  };

  return (
    <div>
      <input
        className="Input"
        type="date"
        name="fromdate"
        placeholder="From Date"
        value={from}
        onChange={fromHandler}
        ref={inputRef}
      />
      <input
        className="Input"
        type="date"
        name="todate"
        placeholder="To Date"
        value={to}
        onChange={toHandler}
      />
      <button className="btn" onClick={() => props.but(from, to)}>GoTo</button>
      <br />
      <br />
      <input
        className="Input"
        type="date"
        name="fromdate"
        placeholder="From Date"
        value={input}
        onChange={searchHandler}
      />
      <br />
      <br />
      <input
        className="Input"
        type="date"
        name="fromdate"
        placeholder="From Date"
        onChange={InputChange}
        ref={inputRef}
      />
      <button className="btn-2" onClick={searchHandler}>search</button>
      <br />
      <br />
      <br />
      {props.search == "true" ? <h1>Hi</h1> : null}
      {console.log(props.search)}
    </div>
  );
};

export default Time;
