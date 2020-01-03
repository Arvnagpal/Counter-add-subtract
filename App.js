import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {Count: 0};
  }

  IncreaseCount(){
    this.setState({
      Count : this.state.Count + 1
    })
  }
  DecreaseCount(){
    this.setState({
      Count : this.state.Count - 1
    })
  }
   render() { 
     return ( 
       <div>
         <h3>value: {this.state.Count}</h3>
         <button onClick={this.IncreaseCount.bind(this)}> Increase </button>
         <button onClick={this.DecreaseCount.bind(this)}> Decrease </button>
       </div>
      );
   }
 }
  

export default App;
