import SimulateDive from "./Enzyme/SimulateDive";
import Sum from "./Jest/Sum";
import Time from "./Time";
import TodoList from "./Todos/TodoList";
import React, { useState } from "react";
import DatePicked from "./DatePicked";
import Props from "./Props";
import DeleteItem from "./DeleteItem";
import Hello from "./Tests/Hello";
import Counter from "./Tests/Counter";
import MainTable from "./Main/MainTable";
import ArrayofArrays from "./state_prac_pages/ArrayofArray";
import MusicApi from "./MusicApi";
import ArrayofObjects from "./state_prac_pages/ArrayofObjects";
import Signup from "./Signup";
import {ReactCalendar} from "../src/calender/index"
import Calendar from '../src/Calender2/index'
import Cale from "./Calender3";
// import './Todos/Todostyle.css';

function App() { 
  const [search, setSearch] = useState(false);
  const handleButton = (from, to) => {
    if (from == "" || to == "") {
      setSearch("false");
      console.log("empty");
    } else {
      setSearch("true");
      console.log("filled");
    }
  };
  return (
    // <div className="todo-app">
    //   <TodoList/>
    // </div>
    <div>
      {/* <Sum a="k"/> */}
      {/* <SimulateDive/> */}
      {/* <Time but={handleButton} search={search}/> */}
      {/* <DatePicked/> */}
      {/* <Props/> */}
      {/* <DeleteItem/> */}
      {/* <center><Hello title={"karthik"}/></center> */}
      {/* <center><Counter/></center>     */}
      {/* <MainTable/> */}
      {/* <TableStructure/> */}
      {/* <ArrayofArrays/> */}
      {/* <Signup/> */}
      <ReactCalendar/>
      {/* <Cale/> */}
      {/* <Calendar/> */}
    {/* <ArrayofObjects/> */}
      {/* <MusicApi /> */}
    </div>
  );
}

export default App;
