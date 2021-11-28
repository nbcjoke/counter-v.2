import React from "react";
import './App.css';


  class counter extends React.Component {
    constructor(props) {
      super(props);
      this.index = props.index;
      this.state = {
          counters: [],
        count: 0
      };
    }
  
    render() {
      return (
        <div className="app">
      <h1 className={this.props.value > 0 ? "positive" : this.props.value  < 0 ? "negative" : null}>
        {this.props.value}
      </h1>
      <div className="wrapper">
        <h2 className={this.props.value % 2 === 0 ? "blue" : "red"}>Введено {this.props.value % 2 === 0 ? 'четное' : 'нечетное' } число</h2>
      </div>
      <div className="button__wrapper">
        <button onClick={() => this.props.changeValue(this.props.value - 1, this.props.index)} disabled={this.props.value === 0}>-</button>
        <button onClick={() => this.props.changeValue(0, this.props.index)}>Reset</button>
        <button onClick={() => this.props.changeValue(this.props.value + 1, this.props.index    )}>+</button>
        <button onClick={() => this.props.deleteCounter(this.props.index)}>Delete</button>
      </div>
    </div>
      );
    }
  } 
  

export default counter;
