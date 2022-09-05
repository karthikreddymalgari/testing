import React,{useState} from 'react';


const Home = () => {
  const [Obj,setObj]=useState({name:"karthik",age:25})
  return <div className="home">
      <div className="one" key="first">First</div>
      <span className="two" key="second">Second</span>
      <span className="three third" key="third" style={{display:"block"}}>Third</span>
  </div>;
};

export default Home;
