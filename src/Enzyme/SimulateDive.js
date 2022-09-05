import React, { Component } from 'react';
import Home from './Home';

export default class SimulateDive extends Component {
  state={
    Name:"karthik",
    Age:25,
    Count:0
  };
   handleClick = ()=>{
      this.setState({Count:this.state.Count+1})
  }
  render() {
    return <div>
      <h1 className={`count${this.state.Count}`}>Count-{this.state.Count}</h1>
      <button className="myButton" onClick={this.handleClick}>Increment</button>
      <Home/>
    </div>;
  }
}
