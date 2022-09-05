import React, { useState, useReducer, createContext } from "react";
import ReducerContext from "./ReducerContext";

export const CounterContext = createContext(null);

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    case "initCount":
      return { ...state, count: action.payload };
    default:
      return state;
  }
};

const Reducer = () => {
  const [input, setInput] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>
        <label>Start Count</label>
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(parseInt(e.target.value))}
        />
        <button onClick={() => dispatch({ type: "initCount", payload: input })}>
          Intialize Counter
        </button>
      </div>
      <div>
        <p>{state.count}</p>
        <button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div><br/>
      <center>
      <CounterContext.Provider value={state.count}>
        <ReducerContext />
      </CounterContext.Provider>
      </center>
    </div>
  );
};

export default Reducer;
